
function Name({ name, onInputChange }) {
    const handleChange = (e) => {
      onInputChange(e.target.value);
    };
  
    return (
      <div className="col">
        <div className="input-group mb-3">
          <span className="input-group-text" id="user-name"><i className="bi bi-person-vcard"></i></span>
          <input 
            type="text" 
            className="form-control" 
            name="user-name" 
            value={name} 
            onChange={handleChange} 
            placeholder="Введите имя" 
          />
        </div>
      </div>
    );
  }

export default Name;