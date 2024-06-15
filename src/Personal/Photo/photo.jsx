
function Photo({onInputChange }) {
    return (
      <div className="input-group mb-3">
        <span className="input-group-text" id="user-name"><i className="bi bi-person-vcard"></i></span>
        <input type="file" className="form-control"name="user-name" onChange={onInputChange}
        />
      </div>
    );
  }

export default Photo;