import Navbar from "@/components/common/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <Features />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
