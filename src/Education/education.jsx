import React, { useState } from 'react';
import CouncilEducation from './buttonCouncilExperience';
import ModalWindowCouncilEducation from '../modalCouncilEducation/modalEducation';
import ButtonShowClose from '../ButtonShowCloseFields/buttonShowCloseEducation';

function Education({ education, onInputChange, index }) {
  
  const [showModal , setShowModal] = useState(false);

  const handleOpenModal = () =>{
    setShowModal(true);
  }

  const handleCloseModal = () =>{
    setShowModal(false);
  }
  
  const month = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const years = [];
  for (let i = 1960; i <= 2024; i++) {
    years.push(i);
  }

  const handleChange = (field, value) => {
    onInputChange(index, field, value);
  };

  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='container-education'>
      <div className='row input-education'>
       
          <h2 className='education-title'>Освіта і кваліфікації</h2>
          <div className='wrapper-buttons'>
            <CouncilEducation onOpen={handleOpenModal}/>
            <ModalWindowCouncilEducation show={showModal} onClose={handleCloseModal}/>
            <ButtonShowClose isVisible={isVisible} toggleVisibility={toggleVisibility}></ButtonShowClose>
          </div>
       
        {
          isVisible && (<div>
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="user-name"><i className="bi bi-person-vcard"></i></span>
              <input type="input" className="form-control" value={education.educationLevel} onChange={(e) => handleChange('educationLevel', e.target.value)} placeholder='Ступінь' name="educationLevel" />
            </div>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="user-name"><i className="bi bi-person-vcard"></i></span>
              <input type="input" className="form-control" value={education.city} onChange={(e) => handleChange('city', e.target.value)} placeholder='Місто' name="city" />
            </div>
          </div>
          </div>)
        }
        
      </div>
      {
        isVisible && (
          <>
          <div className="row studying">
        <div className="input-group">
          <span className="input-group-text" id="user-name"><i className="bi bi-person-vcard"></i></span>
          <input type="input" className="form-control" value={education.university} onChange={(e) => handleChange('university', e.target.value)} placeholder='Навчальний заклад' name="university" />
        </div>
      </div>
      <div className='row start-end-education'>
        
        <div className='col'>
                    <div className="col start-education">
                        <label>Дата початку</label>
                        <div className="input-group mb-3">
                            <select 
                                className="form-select" 
                                value={education.startMonth} 
                                onChange={(e) => handleChange('startMonth', e.target.value)}>
                                {month.map((level, i) => (
                                <option value={level} key={i}>{level}</option>
                                ))}
                            </select>
                        </div>
                  </div>
                  <div className="col">
                        <div className="input-group mb-3">
                        <select 
                            className="form-select" 
                            value={education.startYear} 
                            onChange={(e) => handleChange('startYear', e.target.value)}>
                            {years.map((level, i) => (
                            <option value={level} key={i}>{level}</option>
                            ))}
                        </select>
                        </div>
                  </div>
                </div>
                <div className='col'>
                    <div className="col end-education">
                        <label>Дата закінчення</label>
                        <div className="input-group mb-3">
                            <select 
                                className="form-select" 
                                value={education.endMonth} 
                                onChange={(e) => handleChange('endMonth', e.target.value)}>
                                {month.map((level, i) => (
                                <option value={level} key={i}>{level}</option>
                                ))}
                            </select>
                        </div>
                  </div>
                  <div className="col">
                        <div className="input-group mb-3">
                        <select 
                            className="form-select" 
                            value={education.startYear} 
                            onChange={(e) => handleChange('endYear', e.target.value)}>
                            {years.map((level, i) => (
                            <option value={level} key={i}>{level}</option>
                            ))}
                        </select>
                        </div>
                  </div>
                </div>
                </div>

          </>
        )
      }
      
    </div>
  );
}


export default Education;
