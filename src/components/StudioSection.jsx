import "./StudioSection.css";

const StudioSection = () => {
  const formacion = [
    {
      id: 1,
      estado: "en curso",
      fecha: "2023 - act",
      instituto: "Ifts N°16",
      programa: "Tecnicatura Desarrollo de Software",
    },
    {
      id: 2,
      estado: "finalizado",
      fecha: "2021 - 2022",
      instituto: "Ministerio de Desarrollo",
      programa: "Argentina Programa",
    },
    {
      id: 3,
      estado: "finalizado",
      fecha: "2022",
      instituto: "UTN-FRC",
      programa: "Diplomatura Desarrollo Web",
    },
    {
      id: 4,
      estado: "finalizado",
      fecha: "2009 - 2013",
      instituto: "Marina Vite N°2",
      programa: "Educación Secundaria",
    },
  ];

  return (
    <section>
      <h2>Estudios</h2>
      <div className="cardContainerStudio">
        {formacion.map((item) => (
          <div key={item.id} className="cardStudio">
            <h3>{item.programa}</h3>
            <p>
              <strong>Instituto:</strong> {item.instituto}
            </p>
            <p>
              <strong>Fecha:</strong> {item.fecha}
            </p>
            <p>
              <strong>Estado:</strong> {item.estado}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudioSection;
