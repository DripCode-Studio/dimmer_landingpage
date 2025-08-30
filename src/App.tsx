import Navbar from "@/components/common/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <footer className="bg-gray-800 mt-auto text-white p-4 text-center">
        &copy; {new Date().getFullYear()} DIMMER. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
