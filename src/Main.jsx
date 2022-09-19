import { useState } from "react"
import { Header } from "./Header/Header"
import { Section } from './Section/Section';
import { Footer } from "./Footer/Footer";

export const Main = () => {
    const [triangles, setTriangles] = useState([true, false, false, false])

    const displayTriangle = (tr) => {
        setTriangles(tr)
    }

    return (
        <main className="main--container">
            <div className="wrapper">
                <Header onClick={displayTriangle} triangles={triangles}/>
                <Section triangles={triangles}/>
                <Footer />
            </div>
        </main>
    )
}