function InfoEducation({ educationLevel, startMonth, startYear, endMonth, endYear, university, city }) {
    const educationValue = educationLevel || startMonth || startYear || endMonth || endYear || university || city;
    return (
     <>
        {educationValue && 
          <div className='educationLevel'>
            <div className='row'><div className='col title-education'>Освіта і кваліфікації</div></div>
            <div className='row'>
              <div className='col col-education'>
                <div className='education'><br />{educationLevel}</div>
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
                <div className='university'><br />{university}</div>
                <div className='sity'><br /><b>{city}</b></div>
              </div>
            </div>
          </div>
        }
     </>
    );
  }
  
export default InfoEducation;