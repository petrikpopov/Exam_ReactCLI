
function ShowInfoSkills({ nameSkills, levelSkills }) {
    return (
      <>
        {nameSkills && (
          <div className='skills'>
            <div className='row'>
              <div className='col col-skills'>
                <ul className='show-skills'>
                  <li>{nameSkills} -- {levelSkills}</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

export default ShowInfoSkills;