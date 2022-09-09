export const HeaderIcon = ({triangleHeight, onClick}) => {
    return (
        <div onClick={onClick} className="header--icon">
            <div className="header--icon--image"></div>
            {triangleHeight && <div className="header--icon--triangle"></div>}
        </div>
    )
}