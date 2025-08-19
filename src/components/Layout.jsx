import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import brand from '../assets/brand.png';
import Navbar from './NavBar.jsx';

function Layout({ children }) {
  return (
    <div className="oswald-font container" >
      <header>
        <Navbar />
        <div className="bannerContent">
          <div className="banner"></div>
          <img className="brand" src={brand} alt="brand" />
        </div>
      </header>

      <main>{children}</main>

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
  );
}

export default Layout;
