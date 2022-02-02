import "./App.css";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <div clas="row align-items-center">
          <div class="col">
            <h1></h1>
            <Carousel />
          </div>
        </div>
      </section>
      <footer>

      </footer>
    </>
  );
}

export default App;