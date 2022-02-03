import "./App.css";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <Carousel />
        <Card />
      </section>
      <footer>

      </footer>
    </>
  );
}

export default App;