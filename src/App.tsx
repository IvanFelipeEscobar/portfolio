import Nav from "./components/Nav";

function App() {
  return (
    <>
    
    <header className="bg-blue-600 h-screen">
      <div className="text-right p-5 text-3xl border-b shadow-md shadow-black">
        <section
          id="my-name"
          className="border p-3 inline-block rounded-md shadow-md shadow-black font-Honk"
        >
          Ivan Felipe Escobar
        </section>
      </div>
      <nav id="navigation" className="p-5">
        <Nav />
      </nav>
    </header>
    <body>

    </body>
    <footer>
      
    </footer>

    </>
  );
}

export default App;
