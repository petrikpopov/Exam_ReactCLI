
function About ({ about, onInputChange }) {

    const handleChange = (e) =>{
        onInputChange(e.target.value)
    }

    return <>
        <div className="col input-about">
            <label htmlFor="exampleFormControlTextarea1">Описание</label>
            <textarea className="form-control textarea-about" id="exampleFormControlTextarea1" rows="3" value={about} onChange={handleChange}  maxLength={800}></textarea>
            {about && (<span className="count-world"><span className='minCount'>{about.length}</span>/800</span>)}
        </div> 
    </>
}

export default About;