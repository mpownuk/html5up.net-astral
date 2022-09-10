
export const Home = () => {
    return (
        <div className="section--home">
            <div className='section--home--container'>
                <div className='section--home--header'>
                    <h1 className='section--home--header__heading'>Jane Doe</h1>
                    <p className="paragraph">Senior Astral Projectionist</p>
                </div>
                <div className='section--image'>
                    <img className="section--home--image" src={require('../images/me.jpg')} alt="me"></img>
                </div>
            </div>
        </div>
    )
}