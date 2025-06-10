import "./App.css";
import fotoPerfil from "./assets/fotoPerfil.jpg";
import Contacto from "./components/Contacto";
import CarouselSections from "./components/SolapasSection";

function App() {
  return (
    <>
      <div className="oswald-font container ">

        <header>
          <h1>PFO 01 - Matias Parentti</h1>
        </header>

        <main>
          <section>
            <h2>Sobre mi</h2>

            <figure>
              <img
                className="fotoPerfil"
                src={fotoPerfil}
                alt="fotoPerfil"
                width={100}
                height={100}
              />
            </figure>
            <div className="aboutContent">
              <p>
                I'm a self-taught Full-Stack Developer who works everyday to
                become a better programmer. I've been able to learn a lot a
                different technologies that have given me jobs and let me create
                personal projects around my things of my interest
              </p>
            </div>
          </section>

          <CarouselSections></CarouselSections>

          <Contacto></Contacto>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Matias Parentti</p>
        </footer>
      </div>
    </>
  );
}

export default App;
