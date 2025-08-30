import Navbar from "@/components/common/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
