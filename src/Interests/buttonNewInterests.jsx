
function ButtonNewInterests ({buttonNewInteres}) {

    return <>
        <div className='row'>
            <button type="button" className="btn btn-primary add-new-experience-button" onClick={buttonNewInteres}><i class="bi bi-person-plus-fill"></i>Додати новий інтерес</button>
        </div>
    </>
}

export default ButtonNewInterests;