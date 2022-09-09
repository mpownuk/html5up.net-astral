import { Header } from "./Header/Header"
import { Section } from './Section/Section';
import { Footer } from "./Footer/Footer";

export const Main = () => {
    return (
        <main className="main--container">
            <Header />
            <Section />
            <Footer />
        </main>
    )
}