function InfoExperience({ position, startMonth, startYear, endMonth, endYear, employer, city }) {

    const inputValue = position || startMonth || startYear || endMonth || endYear || employer || city;
    return (
      <>
        {inputValue && 
          <div className='educationLevel'>
            <div className='row'><div className='col title-education'>Місце роботи</div></div>
            <div className='row'>
              <div className='col col-education'>
                <div className='education'><br />{position}</div>
                <div className='year-start-end'>
                  <div>
                    <div>{startMonth}</div>
                    <div>{startYear}</div>
                  </div>
                  <div>
                    <div>{endMonth}</div>
                    <div>{endYear}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col col-university'>
                <div className='university'><br />{employer}</div>
                <div className='sity'><br /><b>{city}</b></div>
              </div>
            </div>
          </div>
        }
      </>
    );
  }
  
export default InfoExperience;