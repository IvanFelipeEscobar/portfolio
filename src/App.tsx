import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div  className="bg-blue-600 h-screen">
    
    <header>
      <div className="text-right p-5 text-3xl border-b shadow-md shadow-black">
        <section
          id="my-name"
          className="border p-3 inline-block rounded-md shadow-md shadow-black font-Honk bg-blue-900 hover:bg-slate-400"
        >
          Ivan Felipe Escobar
        </section>
      </div>
      <nav id="navigation" className="p-5">
        <Nav />
      </nav>
    </header>
    <body id="main_content" className="border mx-5 h-96 shadow-black rounded-md shadow-md bg-stone-800">

    </body>
    <footer id="footer" className="p-3 absolute bottom-0 border-t w-full shadow-reverse shadow-black">
<Footer/>
    </footer>

    </div>
  );
}

export default App;
