
function ShowInterestsInformation ({nameInteres}) {

    return (
        <>
            {nameInteres && <div className='interes'>
                <div className='row'>
                    <div className='col col-interes'>
                        <ul className='show-interes'>
                            <li>{nameInteres}</li>
                        </ul>
                    </div>
                </div>
            </div>
            }
        </>
      );
}

export default ShowInterestsInformation;