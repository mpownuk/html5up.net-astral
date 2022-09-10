import { HeaderIcon } from "./HeaderIcon"

export const Header = ({triangles, onClick}) => {

    return (
        <header className="header">
            <HeaderIcon 
            triangles={triangles[0]}
            onClick={()=>onClick([true, false, false, false])}
            />
            <HeaderIcon 
            triangles={triangles[1]}
            onClick={()=>onClick([false, true, false, false])}

            />
            <HeaderIcon 
            triangles={triangles[2]}
            onClick={()=>onClick([false, false, true, false])}

            />
            <HeaderIcon 
            triangles={triangles[3]}
            onClick={()=>onClick([false, false, false, true])}

            />
        </header>
    )
}