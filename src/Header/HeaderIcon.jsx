export const HeaderIcon = ({triangles, onClick}) => {
    return (
        <div onClick={onClick} className="header--icon">
            <div className="header--icon--image"></div>
            <div className={triangles ? "header--icon--triangle" : "header--icon--triangle__none"}></div>
        </div>
    )
}