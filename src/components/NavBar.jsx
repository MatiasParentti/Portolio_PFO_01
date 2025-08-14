import "./NavBar.css";
import logo from "../assets/brand.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navBarContent">
      <div className="navBarBrand">
        <img src={logo} alt="Logo" className="logo" />
        <button className="menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faEllipsisVertical} />{" "}
        </button>
      </div>

      <nav className={`navBarLinks ${isOpen ? "showMenu" : ""}`}>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#sobre-mi">Sobre mí</a>
          </li>
          <li>
            <a href="/proyectos">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
