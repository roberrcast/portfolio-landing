import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { Philosophy } from "./components/Philosophy";
import { TechnicalCraft } from "./components/Technical";
import { InquiryForm } from "./components/Inquiry";
import { Footer } from "./components/Footer";
import { useReveal } from "./hooks/useReveal";

function App() {
    useReveal();
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Philosophy />
                <Gallery />
                <TechnicalCraft />
                <InquiryForm />
            </main>
            <Footer />
        </>
    );
}
export default App;
