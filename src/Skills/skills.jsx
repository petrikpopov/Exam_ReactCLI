import { useState } from "react";
import ButtonShowCloseSkills from "../ButtonShowCloseFields/buttonShowCloseSkills";

function Skills({ skills, onInputChange, index }) {

    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    }

    const levelSkills = ['Експерт', 'Досвідчений', 'Умілий', 'Початківець', 'Новачок'];
  
    const handleChange = (field, value) => {
      onInputChange(index, field, value);
    };
  
    return (
      <div className="container-skills">
         <div className="wrapper-buttons">
           <h2 className='skills-title'>Навички</h2>
           <ButtonShowCloseSkills isVisible={isVisible} toggleVisibility={toggleVisibility}/>
         </div>
        { isVisible && (<>
          <div className="row input-skills">
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="user-name"><i className="bi bi-person-vcard"></i></span>
                <input 
                  type="input" 
                  className="form-control" 
                  value={skills.nameSkills} 
                  onChange={(e) => handleChange('nameSkills', e.target.value)} 
                  placeholder='Microsoft Word' 
                  name="educationLevel" 
                />
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <select 
                  className="form-select" 
                  value={skills.levelSkills} 
                  onChange={(e) => handleChange('levelSkills', e.target.value)} 
                  aria-label="Default select example"
                >
                  {levelSkills.map((level, i) => (
                    <option value={level} key={i}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          </>)
        }
      </div>
    );
  }

export default Skills;