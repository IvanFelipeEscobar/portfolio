import { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import OldTubeTV from "./components/OldTubeTV";

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
        <nav className="flex justify-between flex-wrap p-5 text-3xl border-b shadow-md shadow-black">
          <section className="font-Honk">Ivan Felipe Escobar</section>
          <div>
            <Nav activePg={pg} handlePg={handlePg} />
          </div>
        </nav>
      </header>
      <div className="m-10 p-12">
        <OldTubeTV />
      </div>
      <body
        id="main_content"
        className="max-w-xl border mx-5 my-10 h-3/5 shadow-black rounded-md shadow-xl bg-stone-800"
      >
        {renderPage()}
      </body>
      <footer id="footer" className="p-3 bg-inherit w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
