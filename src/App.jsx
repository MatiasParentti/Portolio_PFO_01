import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contacto from "./components/Contacto";
import Navbar from "./components/NavBar";
import CarouselSections from "./components/SolapasSection";
import Proyectos from "./components/Proyectos";
import ProyectoDetalle from "./components/ProyectoDetalle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import brand from "./assets/brand.png";
import "./App.css";

function Home() {
  return (
    <>
      <main>
        <About />
        <CarouselSections />
        <Contacto />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="oswald-font container">
        <header>
          <Navbar />
          <div className="bannerContent">
            <div className="banner"></div>
            <img className="brand" src={brand} alt="brand" />
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
        </Routes>

        <footer>
          <p>&copy; {new Date().getFullYear()} Matias Parentti</p>
          <div>
            <a href="https://github.com/MatiasParentti">
              <FontAwesomeIcon className="socialIcon" icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/matias-parentti-7285a9226/">
              <FontAwesomeIcon className="socialIcon" icon={faLinkedinIn} />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
