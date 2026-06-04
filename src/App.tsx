import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InquiryForm } from "./components/Inquiry";
import { Philosophy } from "./components/Philosophy";
import { TechnicalCraft } from "./components/Technical";
import { useReveal } from "./hooks/useReveal";

function App() {
    useReveal();
    return (
        <>
            <Header />
            <Hero />
            <Philosophy />
            <Gallery />
            <TechnicalCraft />
            <InquiryForm />
        </>
    );
}

export default App;
