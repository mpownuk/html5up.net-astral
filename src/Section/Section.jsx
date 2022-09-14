import { useState, useEffect } from "react"
import { Home } from "./Home"
import { Work } from "./Work"
import { ContactMe } from "./ContactMe"

export const Section = ({triangles}) => {

    const [sect, setSect] = useState([true, false, false, false])


    useEffect(() => {
        setTimeout(() => {
            setSect(triangles)
        }, 300);
    }, [triangles])

    return (
        <section className="section">
                {sect[0] ? <Home triangles={triangles} /> : null}
                {sect[1] ? <Work triangles={triangles} /> : null}
                {sect[2] ? <ContactMe triangles={triangles} /> : null}
        </section>
    )
}