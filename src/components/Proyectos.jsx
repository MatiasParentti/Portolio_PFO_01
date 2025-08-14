import { useNavigate } from "react-router-dom";
import "./Proyectos.css";

const proyectosData = [
  {
    id: 1,
    imagen: "https://i.postimg.cc/CLTsVtPc/Captura-de-pantalla-2024-01-25-172650.png",
    descripcion: "Pagina web para una escuela de oficios, con sección de noticias y sus cursos.",
    live: "https://www.escueladeoficiosluladasilva.com.ar/",
    titulo: "Escuela de Oficios",
    source: "https://github.com/MatiasParentti/esc-ofi-lula",
    stack: "React/Next/MongoDB/Bootstrap/Vercel",
  },
  {
    id: 2,
    imagen: "https://i.postimg.cc/Hxd6HNkG/Captura-de-pantalla-2024-01-25-173508.png",
    descripcion: "Landing page para una empresa de servicios",
    live: "https://www.fratellicontroldeplagas.com.ar/",
    titulo: "Fratelli CDP",
    source: "https://github.com/MatiasParentti/Fratelli-Web",
    stack: "React/HTML/CSS/Firebase/MaterialUI/ScrollReveal/Yup/Iconify/Hostinger",
  },
  {
    id: 3,
    imagen: "https://i.postimg.cc/W4WxWj7W/pok.png",
    descripcion: "Demo hecha en React con consumo de API de Pokémon; paginación y visualización de datos en tiempo real",
    live: "https://mp-pokedex-app.firebaseapp.com/",
    titulo: "Pokedex",
    source: "https://github.com/MatiasParentti/pokedex",
    stack: "React/Nes.css/Pokeapi.co/Firebase",
  },
  {
    id: 4,
    imagen: "https://i.postimg.cc/BvBnX848/work1.png",
    descripcion: "Administrador de pedidos de algún negocio",
    live: "https://www.fratellicontroldeplagas.com.ar/",
    titulo: "Café el Chiwi",
    source: "https://github.com/MatiasParentti/Cafe-el-chiwi",
    stack: "Node/Express/MongoDB/Bootstrap/HandleBars/Railway",
  },
];

const Proyectos = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/proyectos/${id}`);
  };

  return (

    <section className="proyectos-container">
      <h2>Proyectos</h2>
      <div className="cards-container">
        {proyectosData.map((proyecto) => (
          <div
            key={proyecto.id}
            className="proyecto-card"
            onClick={() => handleCardClick(proyecto.id)}
          >
            <img src={proyecto.imagen} alt={proyecto.titulo} className="proyecto-img" />
            <div className="proyecto-info">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <small>{proyecto.stack}</small>
              <div className="proyecto-buttons">
                <a href={proyecto.live} target="_blank" onClick={(e) => e.stopPropagation()} className="btn">
                  🔗 Ver Live
                </a>
                <a href={proyecto.source} target="_blank" onClick={(e) => e.stopPropagation()} className="btn">
                  📁 Código Fuente
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Proyectos;
