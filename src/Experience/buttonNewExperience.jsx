function ButtonAddNewExperience ({onExperienceInformation}) {
    return <>
         <div className='row'>
            <button type="button" className="btn btn-primary add-new-experience-button" onClick={onExperienceInformation}><i class="bi bi-person-plus-fill"></i>Додати місце роботи</button>
        </div>
    </>
}

export default ButtonAddNewExperience;