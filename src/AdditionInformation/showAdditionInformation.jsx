
function ShowAdditionInfo({placeBirth, sex, drivingLicense, nationality, maritalStatus, linkedIn , website}){
    const hasAdditionalInfo = placeBirth || sex || drivingLicense || nationality || maritalStatus || linkedIn || website;
    return <>
        <div className="show-addition-info">
            {hasAdditionalInfo && <p><b>Додаткова інформація</b></p>}
            {
                placeBirth && ( <div className="wrapper-place-of-birth">
                    <img src={`${process.env.PUBLIC_URL}/house.svg`} alt="My Icon" />
                    <div>Місце народження <u>{placeBirth}</u></div>
                </div>)
            }
            {
                sex && (<div className="wrapper-place-of-birth">
                    <img src={`${process.env.PUBLIC_URL}/person.svg`} alt="My Icon" />
                    <div>Стать <u>{sex}</u></div>
                </div>)
            }
            {
                drivingLicense && ( <div className="wrapper-place-of-birth">
                    <img src={`${process.env.PUBLIC_URL}/car.svg`} alt="My Icon" />
                    <div>Посвідчення водія <u>{drivingLicense}</u></div>
                </div>)
            }
            {
                nationality && (<div className="wrapper-place-of-birth">
                    <img src={`${process.env.PUBLIC_URL}/flag.svg`} alt="My Icon" />
                    <div>Національність <u>{nationality}</u></div>
                </div>)
            }
            {
                maritalStatus && (<div className="wrapper-place-of-birth">
                    <img src={`${process.env.PUBLIC_URL}/diagram.svg`} alt="My Icon" />
                    <div>Сімейний стан <u>{maritalStatus}</u></div>
                </div>)
            }
            {
                linkedIn && (<div className="wrapper-place-of-birth">
                    <img src={`${process.env.PUBLIC_URL}/linkedin.svg`} alt="My Icon" />
                    <div>LinkedIn <u>{linkedIn}</u></div>
                </div>)
            }
            {
                website && (<div className="wrapper-place-of-birth">
                    <img src={`${process.env.PUBLIC_URL}/globe.svg`} alt="My Icon" />
                    <div>Веб-сайт <u>{website}</u></div>
                </div>)
            }
            
        </div>
    
    
    </>
}

export default ShowAdditionInfo;