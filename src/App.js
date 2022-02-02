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
        <div class="row">
          <div class="col">
            <h1>Hola Seba</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Carousel />
          </div>
        </div>
      </section>
      <footer></footer>
    </>
  );
}

export default App;
