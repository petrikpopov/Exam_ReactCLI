import { useState } from "react";
import ButtonShowCloseInteres from "../ButtonShowCloseFields/buttonShowCloseInteres";

function NewInteres({ interes, onInputChange, index }) {

    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () =>{
      setIsVisible(!isVisible);
    }

    const handleChange = (field, value) => {
      onInputChange(index, field, value);
    };
  
    return (
      <div className="wrapper-ineres">
        <div className="wrapper-buttons">
           <h2 className='interes-title'>Інтереси</h2>
            <ButtonShowCloseInteres toggleVisibility={toggleVisibility} isVisible={isVisible}/>
        </div>
        {isVisible && (<div className="input-group mb-3">
          <span className="input-group-text" id="user-name"><i className="bi bi-cast"></i></span>
          <input  type="input" className="form-control" placeholder='Наприклад, Туризм' name="experiencePosition" value={interes.nameInteres} onChange={(e) => handleChange('nameInteres', e.target.value)} 
          />
        </div>)}
      </div>
    );
  }

export default NewInteres;