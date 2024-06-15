
function CouncilEducation({ onOpen }) {
    return (
      <button 
        type="button" 
        className="btn btn-outline-primary button-council" 
        onClick={onOpen}
      >
        <i className="bi bi-lightbulb"></i> Поради
      </button>
    );
  }

export default CouncilEducation;