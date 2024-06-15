
function ButtonShowCloseEsperience ({isVisible, toggleVisibility}) {
    return <>
        <button type="button" className="btn btn-outline-success btn-show-block" onClick={toggleVisibility}>
            {isVisible ? 'Сховати' : 'Показати'} поля
        </button>
    </>
   
}

export default ButtonShowCloseEsperience