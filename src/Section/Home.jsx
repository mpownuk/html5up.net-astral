import { SideButton } from './SideButton'
import { useState } from 'react'

export const Home = ({triangles, displayTriangle}) => {

    const [sideBtn, setSideBtn] = useState(false)

    const makeBtnWider = () => {
        setSideBtn(true)
    }
    const makeBtnShort = () => {
        setSideBtn(false)
    }

    return (
        <div className={triangles[0] ? "section--home blue" : "section--home red"}>
            <div className='section--home--container'>
                <div className='section--header'>
                    <h1>Jane Doe</h1>
                    <p className="paragraph">Senior Astral Projectionist</p>
                </div>
                <div onMouseOver={makeBtnWider} onMouseOut={makeBtnShort} className='section--image'>
                    <img className="section--home--image" src={require('../images/me.jpg')} alt="me"></img>
                    <SideButton sideBtn={sideBtn} triangles={triangles} displayTriangle={displayTriangle}/>
                </div>
            </div>
        </div>
    )
}