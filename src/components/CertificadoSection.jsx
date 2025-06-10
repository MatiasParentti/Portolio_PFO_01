import "./CertificadoSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import diploweb from "../assets/diploweb.png";
import introprog from "../assets/introprog.png";
import nocountry from "../assets/nocountry.png";
import seprogramar from "../assets/seprogramar.png";
import yoprogramo from "../assets/yoprogramo.png";
import { useState } from "react";

const CertificadoSection = () => {
  const certificados = [
    {
      id: 1,
      enlace: nocountry,
      instituto: "No Country",
      programa: "No Country for Junior Devs",
    },
    {
      id: 2,
      enlace: yoprogramo,
      instituto: "Argentina Programa",
      programa: "#YoProgramo",
    },
    {
      id: 3,
      enlace: seprogramar,
      instituto: "Argentina Programa",
      programa: "#SeProgramar",
    },
    {
      id: 4,
      enlace: diploweb,
      instituto: "UTN-FRC",
      programa: "Diplomatura Desarrollo Web",
    },
    {
      id: 5,
      enlace: introprog,
      instituto: "UTN-FRC",
      programa: "Introducción a la Programación",
    },
  ];
  const [modalImage, setModalImage] = useState(null);
  return (
    <>
      <section>
        <h2>Certificados</h2>
        <div className="cardContainerCertificado">
          {certificados.map((item) => (
            <div
              key={item.id}
              className="cardCertificado"
              
            >
              <div className="imgContainer">
                <img
                  src={item.enlace}
                  alt={item.programa}
                  className="certificadoImage"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlassPlus}
                  className="zoomIcon"
                  onClick={() => setModalImage(item.enlace)}
                />
              </div>

              <h3>{item.programa}</h3>
              <p>
                <strong>Instituto:</strong> {item.instituto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <div className="modalContent">
            <img src={modalImage} alt="Certificado ampliado" />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificadoSection;
