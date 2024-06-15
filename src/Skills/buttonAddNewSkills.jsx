
function ButtonNewSkills ({onAddSkills}) {

    return <>
         <div className='row'>
            <button type="button" class="btn btn-primary add-new-skills" onClick={onAddSkills}><i class="bi bi-backpack-fill"></i>Додати навичку</button>
        </div>
    </>

}

export default ButtonNewSkills;