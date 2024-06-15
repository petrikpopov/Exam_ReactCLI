
function ShowInfoPersonal ({phone, email, addresHome, userLocation}) {
    return <>
        {phone && (<div className='wrapper-phone'>
              <img src={`${process.env.PUBLIC_URL}/phone.svg`} alt="My Icon" />
              <div >Номер телефона<u>{phone}</u></div>
            </div>)}
            {email && (<div className='wrapper-email'>
              <img src={`${process.env.PUBLIC_URL}/email.svg`} alt="My Icon" />
              <div >Электронная почта<u>{email}</u></div>
            </div>)}
            {addresHome && (<div className='wrapper-addres'>
              <img src={`${process.env.PUBLIC_URL}/house.svg`} alt="My Icon" />
              <div>Место проживания<u>{addresHome}, {userLocation}</u></div>
            </div>)}
    </>
}

export default ShowInfoPersonal;