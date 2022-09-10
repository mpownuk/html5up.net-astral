export const HeaderIcon = ({triangles, onClick}) => {
    return (
        <div onClick={onClick} className="header--icon">
            <div className="header--icon--image"></div>
            {triangles && <div className="header--icon--triangle"></div>}
        </div>
    )
}