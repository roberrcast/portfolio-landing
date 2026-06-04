import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Philosophy } from "./components/Philosophy";
import { useReveal } from "./hooks/useReveal";

function App() {
    useReveal();
    return (
        <>
            <Header />
            <Hero />
            <Philosophy />
            <Gallery />
        </>
    );
}

export default App;
