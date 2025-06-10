import fotoPerfil from "../assets/fotoPerfil.jpg";
import './About.css';
const About = () => {
  return (
    <section className="aboutSection">
      <h2>Sobre mi</h2>
      <div className="aboutContent">
       
          <img
            className="fotoPerfil"
            src={fotoPerfil}
            alt="fotoPerfil"
            width={100}
            height={100}
          />
        
        <div className="aboutText">
          <p>
            I'm a self-taught Full-Stack Developer who works everyday to become
            a better programmer. I've been able to learn a lot a different
            technologies that have given me jobs and let me create personal
            projects around my things of my interest
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
