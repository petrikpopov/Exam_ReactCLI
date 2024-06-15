function CouncilExperience({ onOpen }) {
    return (
      <button 
        type="button" 
        className="btn btn-outline-primary button-council button-council-experience" 
        onClick={onOpen}
      >
        <i className="bi bi-lightbulb"></i> Поради
      </button>
    );
  }

export default CouncilExperience;