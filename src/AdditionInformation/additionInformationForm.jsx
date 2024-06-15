
function AdditionInformation({additionInformation, onInputChange}) {

    const month = [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    const sex = ['Чоловік', 'Жінка']

    const maritalStatus = ['Неодружений / Незаміжня', 'Одружений / Заміжня', 'У цивільному шлюбі / У партнерстві', 'Розлучений / Розлучена']
    
    const years = [];
    for (let i = 1960; i <= 2024; i++) {
      years.push(i);
    }

    const day = [];
    for(let i = 1; i<=31; i++ ){
      day.push(i)
    }

    const handleChange = (field, value) =>{

        onInputChange(field, value);
    }

    return (
        <>
          <div className='row'>
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="user-name">
                  <i className="bi bi-car-front-fill"></i>
                </span>
                <input
                  type="input"
                  className="form-control"
                  placeholder="Driving license"
                  value={additionInformation.drivingLicense}
                  onChange={(e) => handleChange('drivingLicense', e.target.value)}
                />
              </div>
            </div>
            <div className="col">
                <div className="input-group mb-3">
                    <select 
                        className="form-select" value={additionInformation.sex}
                        onChange={(e) => handleChange('sex', e.target.value)}>
                        {sex.map((sex, s) => (
                        <option value={sex} key={s}>{sex}</option>
                        ))}
                    </select>
                  </div>
            </div>
          </div>
          <div className='row'>
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="user-name">
                  <i className="bi bi-flag-fill"></i>
                </span>
                <input
                  type="input"
                  className="form-control"
                  placeholder="Nationality"
                  value={additionInformation.nationality}
                  onChange={(e) => handleChange('nationality', e.target.value)}
                />
              </div>
            </div>
            <div className="col">
                <div className="input-group mb-3">
                    <select 
                        className="form-select" value={additionInformation.maritalStatus}
                        onChange={(e) => handleChange('maritalStatus', e.target.value)}>
                        {maritalStatus.map((maritalStatus, ms) => (
                        <option value={maritalStatus} key={ms}>{maritalStatus}</option>
                        ))}
                    </select>
                  </div>
            </div>
          </div>
          <div className='row'>
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="user-name">
                  <i className="bi bi-linkedin"></i>
                </span>
                <input
                  type="input"
                  className="form-control"
                  placeholder="LinkedIn"
                  value={additionInformation.linkedIn}
                  onChange={(e) => handleChange('linkedIn', e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="user-name">
                  <i className="bi bi-globe"></i>
                </span>
                <input
                  type="input"
                  className="form-control"
                  placeholder="Website"
                  value={additionInformation.website}
                  onChange={(e) => handleChange('website', e.target.value)}
                />
              </div>
            </div>
          </div>
        </>
      );
}

export default AdditionInformation;