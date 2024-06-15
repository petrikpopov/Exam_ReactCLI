
function ButtonAdditionInformation ({onAdditionInformation, }) {

    return <>
        <div className='row'>
            <button type="button" class="btn btn-primary add-new-education" onClick={onAdditionInformation}><i class="bi bi-plus-circle-fill"></i>Дополнительная информация</button>
        </div>
    </>
}

export default ButtonAdditionInformation;