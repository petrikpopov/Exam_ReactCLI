import { useState } from "react";
import ButtonShowClosePersonal from "../../ButtonShowCloseFields/buttonShowClosePersonalInfo";

function Personal({ personalInfo, onInputChange }) {
    
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () =>{
        setIsVisible(!isVisible);
    }

    const handleChange = (field, value) => {
        onInputChange(field, value);
    };

    return (
        <>
            <div className="info-personal">
                <div className="wrapper-buttons">
                    <h2 className='personal-title'>Особисті дані</h2>
                    <ButtonShowClosePersonal isVisible={isVisible} toggleVisibility={toggleVisibility}></ButtonShowClosePersonal>
                </div>
                {isVisible && (
                    <>
                    <div className="col">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="user-phone"><i className="bi bi-phone"></i></span>
                            <input
                                type="text"
                                className="form-control"
                                name="user-phone"
                                placeholder="Enter phone"
                                value={personalInfo.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="user-email"><i className="bi bi-envelope-at-fill"></i></span>
                            <input
                                type="email"
                                className="form-control"
                                name="user-email"
                                placeholder="Enter email"
                                value={personalInfo.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <div className="input-group">
                                    <span className="input-group-text" id="user-home"><i className="bi bi-house-fill"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="user-home"
                                        placeholder="Your address"
                                        value={personalInfo.addresHome}
                                        onChange={(e) => handleChange('addresHome', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group">
                                    <span className="input-group-text" id="user-home"><i className="bi bi-house-fill"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="user-home"
                                        placeholder="Your city"
                                        value={personalInfo.userLocation}
                                        onChange={(e) => handleChange('userLocation', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )}

            </div>
        </>
    );
}

export default Personal;