
function ShowAbout ({about}) {
    return <>
        {about && (<div className='about'>{about}</div>)}
    </>
}

export default ShowAbout;