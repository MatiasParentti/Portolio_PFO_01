import "./App.css";
import About from "./components/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import brand from "./assets/brand.png";
import Contacto from "./components/Contacto";
import Navbar from "./components/NavBar";
import CarouselSections from "./components/SolapasSection";

function App() {
  return (
    <>
      <div className="oswald-font container ">
        <header>
          <Navbar></Navbar>
          <div className="bannerContent">
            <div className="banner"></div>
            <img className="brand" src={brand}  alt="brand" />
          </div>
        </header>

        <main>
          <About></About>

          <CarouselSections></CarouselSections>

          <Contacto></Contacto>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Matias Parentti</p>
          <div className="">
            <a href="https://github.com/MatiasParentti">
              <FontAwesomeIcon className="socialIcon" icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/matias-parentti-7285a9226/">
              <FontAwesomeIcon className="socialIcon" icon={faLinkedinIn} />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
