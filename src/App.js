import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <div class="row">
          <div class="col" style={{textAlign: 'center'}}>
            Fichate este navbar vanila papá
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Carousel />
            <Card />
          </div>
        </div>
      </section>
      <footer></footer>
    </>
  );
}

export default App;
