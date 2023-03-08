export const SideButton = ({sideBtn}) => {
    return (
        <div 
            className="side--button" 
            style={sideBtn ? {width:'4.4rem', transition:'0.2s'} : {width:'4rem', transition:'0.2s'}}
        >
            <div className="arrow"></div>
        </div>
    )
}