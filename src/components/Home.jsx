import About from './About.jsx'
import CarouselSections from "./SolapasSection";
import CV from "./Cv";

function Home() {
  return (
    <>
      <main>
        <About />
        <CarouselSections />
        <CV />
      </main>
    </>
  );
}

export default Home;
