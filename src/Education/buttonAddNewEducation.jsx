import Education from "./education.jsx";

function ButtonEducation ({ onAddEducation }) {
    return <>
        <div className='row'>
            <button type="button" class="btn btn-primary add-new-education" onClick={onAddEducation}><i class="bi bi-plus-square"></i>Додати ще одну освіту</button>
        </div>
    </>
}

export default ButtonEducation;