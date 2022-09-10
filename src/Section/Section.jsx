import { Home } from "./Home"
import { Work } from "./Work"
import { ContactMe } from "./ContactMe"

export const Section = ({triangles}) => {
    return (
        <section className="section">
                {triangles[0] && <Home />}
                {triangles[1] && <Work />}
                {triangles[2] && <ContactMe />}
        </section>
    )
}