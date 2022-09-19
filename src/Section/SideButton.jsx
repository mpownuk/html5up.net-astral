export const SideButton = ({sideBtn, triangles, displayTriangle}) => {
    return (
        <div 
            className="side--button" 
            style={sideBtn ? {width:'4.4rem', transition:'0.2s'} : {width:'4rem', transition:'0.2s'}}
            onClick={()=>{displayTriangle([false, true, false, false])}}
        >
            <div className="arrow"></div>
        </div>
    )
}