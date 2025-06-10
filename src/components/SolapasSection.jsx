import React, { useState } from "react";
import "./SolapasSection.css";
import Skills from "./Skills";
import StudioSection from "./StudioSection";
import CertificadoSection from "./CertificadoSection";

const SolapasSection = () => {
  const [activeSolapa, setActiveSolapa] = useState("solapa1");

  return (
    <div id="sobre-mi" className="solapasContainer">
      <div className="solapas">
        <button
          className={activeSolapa === "solapa1" ? "solapa active" : "solapa"}
          onClick={() => setActiveSolapa("solapa1")}
        >
          Skills
        </button>
        <button
          className={activeSolapa === "solapa2" ? "solapa active" : "solapa"}
          onClick={() => setActiveSolapa("solapa2")}
        >
          Estudios
        </button>
        <button
          className={activeSolapa=== "solapa3" ? "solapa active" : "solapa"}
          onClick={() => setActiveSolapa("solapa3")}
        >
          Certificados
        </button>
      </div>

      <div className="solapaContent">
        {activeSolapa === "solapa1" && (
          <div className="content">
            <Skills></Skills>
          </div>
        )}
        {activeSolapa === "solapa2" && (
          <div className="content">
           <StudioSection></StudioSection>
          </div>
        )}
        {activeSolapa === "solapa3" && (
          <div className="content">
           <CertificadoSection></CertificadoSection>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolapasSection;



