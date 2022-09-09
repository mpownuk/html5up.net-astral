import { useEffect, useState } from "react"
import { HeaderIcon } from "./HeaderIcon"

export const Header = () => {
    const [triangles, setTriangles] = useState([true, false, false, false])

    const displayTriangle = (tr) => {
        setTriangles(tr)
    }

    return (
        <header className="header">
            <HeaderIcon 
            triangleHeight={triangles[0]}
            onClick={()=>displayTriangle([true, false, false, false])}
            />
            <HeaderIcon 
            triangleHeight={triangles[1]}
            onClick={()=>displayTriangle([false, true, false, false])}

            />
            <HeaderIcon 
            triangleHeight={triangles[2]}
            onClick={()=>displayTriangle([false, false, true, false])}

            />
            <HeaderIcon 
            triangleHeight={triangles[3]}
            onClick={()=>displayTriangle([false, false, false, true])}

            />
        </header>
    )
}