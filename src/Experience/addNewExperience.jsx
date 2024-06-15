import React, { useState } from 'react';
import CouncilExperience from './buttonCouncilExperience';
import ModalWindowCouncil from '../modalCouncilExperience/modalExperience';
import ButtonShowCloseEsperience from '../ButtonShowCloseFields/buttonShowCloseExperience';

function Experience ({ experience, onInputChange, index }) {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

    const month = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    const years = [];
    for(let i = 1960; i <= 2024; i++){
        years.push(i);
    }
    
    const handleChange = (field, value) =>{
        onInputChange(index, field, value);
    }

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return <>
        <div className='container-education'>
            <div className='row input-education'>
                <h2 className='education-title'>Досвід роботи</h2>
                <div className='row wrapper-buttons'>
                    <CouncilExperience onOpen={handleOpenModal} />
                    <ModalWindowCouncil show={showModal} onClose={handleCloseModal} />
                    <ButtonShowCloseEsperience isVisible={isVisible} toggleVisibility={toggleVisibility}></ButtonShowCloseEsperience>
                </div>
               {isVisible && (<>
                <div className="col">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="user-name"><i className="bi bi-person-vcard"></i></span>
                        <input type="input" className="form-control" value={experience.position} onChange={(e) => handleChange('position', e.target.value)} placeholder='Посада' name="experiencePosition" />
                    </div>
                    </div>
                    <div className="col">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="user-name"><i className="bi bi-person-vcard"></i></span>
                        <input type="input" className="form-control" value={experience.city} onChange={(e) => handleChange('city', e.target.value)} placeholder='Місто' name="city" />
                    </div>
                    </div>
               </>)}
                
            </div>
            {isVisible && (<>
                <div className="row studying">
                    <div className="input-group">
                    <span className="input-group-text" id="user-name"><i className="bi bi-person-vcard"></i></span>
                    <input type="input" className="form-control" value={experience.employer} onChange={(e) => handleChange('employer', e.target.value)} placeholder='Роботодавець' name="Employer" />
                    </div>
                </div>
                <div className='row start-end-education'>
                    <div className='col'>
                        <div className="col start-education">
                            <label>Дата початку</label>
                            <div className="input-group mb-3">
                                <select 
                                    className="form-select" 
                                    value={experience.startMonth} 
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
                                value={experience.startYear} 
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
                                    value={experience.endMonth} 
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
                                value={experience.startYear} 
                                onChange={(e) => handleChange('endYear', e.target.value)}>
                                {years.map((level, i) => (
                                <option value={level} key={i}>{level}</option>
                                ))}
                            </select>
                            </div>
                    </div>
                    </div>
                </div>
            </>)}
         </div>
    </>
}

export default Experience;
