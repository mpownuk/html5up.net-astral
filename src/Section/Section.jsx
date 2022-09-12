import { Home } from "./Home"
import { Work } from "./Work"
import { ContactMe } from "./ContactMe"

export const Section = ({triangles}) => {

const hideAndDispaly = (elem) => {
        return elem
}

    return (
        <section className="section">
                {triangles[0] ? hideAndDispaly(<Home triangles={triangles} />) : null}
                {triangles[1] ? hideAndDispaly(<Work triangles={triangles} />) : null}
                {triangles[2] ? hideAndDispaly(<ContactMe triangles={triangles} />) : null}
        </section>
    )
}