import { lazy, Suspense } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { useReveal } from "./hooks/useReveal";

const Philosophy = lazy(() => import("./components/Philosophy"));
const Gallery = lazy(() => import("./components/Gallery"));
const TechnicalCraft = lazy(() => import("./components/Technical"));
const InquiryForm = lazy(() => import("./components/Inquiry"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
    useReveal();
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Suspense fallback={null}>
                    <Philosophy />
                    <Gallery />
                    <TechnicalCraft />
                    <InquiryForm />
                </Suspense>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </>
    );
}

export default App;
