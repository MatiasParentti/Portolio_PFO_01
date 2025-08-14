import { useParams } from "react-router-dom";
import "./ProyectoDetalle.css";

const proyectosData = [
  {
    id: 1,
    imagen:
      "https://i.postimg.cc/CLTsVtPc/Captura-de-pantalla-2024-01-25-172650.png",
    descripcion:
      "Pagina web para una escuela de oficios, con sección de noticias y sus cursos.",
    live: "https://www.escueladeoficiosluladasilva.com.ar/",
    titulo: "Escuela de Oficios",
    source: "https://github.com/MatiasParentti/esc-ofi-lula",
    stack: "React/Next/MongoDB/Bootstrap/Vercel",
  },
  {
    id: 2,
    imagen:
      "https://i.postimg.cc/Hxd6HNkG/Captura-de-pantalla-2024-01-25-173508.png",
    descripcion: "Landing page para una empresa de servicios",
    live: "https://www.fratellicontroldeplagas.com.ar/",
    titulo: "Fratelli CDP",
    source: "https://github.com/MatiasParentti/Fratelli-Web",
    stack:
      "React/HTML/CSS/Firebase/MaterialUI/ScrollReveal/Yup/Iconify/Hostinger",
  },
  {
    id: 3,
    imagen: "https://i.postimg.cc/W4WxWj7W/pok.png",
    descripcion:
      "Demo hecha en React con consumo de API de Pokémon; paginación y visualización de datos en tiempo real",
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

const ProyectoDetalle = () => {
  const { id } = useParams();
  const proyecto = proyectosData.find((p) => p.id === parseInt(id));

  if (!proyecto) return <p>Proyecto no encontrado</p>;

  return (
    <section className="proyecto-detalle-container">
      <div className="proyecto-detalle">
        <h2>{proyecto.titulo}</h2>
        <img src={proyecto.imagen} alt={proyecto.titulo} />
        <p>{proyecto.descripcion}</p>
        <p>
          <strong>Stack:</strong> {proyecto.stack}
        </p>
        <div className="proyecto-detalle-buttons">
          <a href={proyecto.live} target="_blank" rel="noopener noreferrer">
            🔗 Ver Live
          </a>
          <a href={proyecto.source} target="_blank" rel="noopener noreferrer">
            📁 Código Fuente
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProyectoDetalle;
