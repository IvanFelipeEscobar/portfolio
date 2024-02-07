import { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import OldTubeTV from "./components/OldTubeTV";
import TypingAnimation from "./components/TypingAnimation";

function App() {
  const [pg, setPg] = useState("landing");
  const renderPage = () => {
    if (pg === "About") return <About />;
    if (pg === "Contact") return <Contact />;
    if (pg === "Projects") return <Projects />;
    return <></>;
  };
  const handlePg = (page: string) => setPg(page);
  return (
    <div className="bg-blue-600 h-full ">
      <header>
        <nav className="flex justify-center sm:justify-between flex-wrap p-5 text-3xl border-b shadow-md shadow-black">
          <section className="font-Honk mr-6 mb-2">Ivan Felipe Escobar</section>
          <div>
            <Nav activePg={pg} handlePg={handlePg} />
          </div>
        </nav>
      </header>

      <div className="">
        <OldTubeTV render={renderPage}/>
      </div>

      <div className="h-32 font-strike text-center text-2xl">
        <TypingAnimation />
      </div>

      <footer id="footer" className="p-3 bg-inherit w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
