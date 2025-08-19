import "./Cv.css";

const CV = () => {
  return (
    <section className="cvSection">
      <h2 className="cvTitle">Mi CV</h2>

      {/* Botón para abrir el PDF desde tu hosting */}
      <div className="cvActions">
        <a
          href="/MatiasParenttiCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cvButton"
        >
          📄 Descargar CV
        </a>
      </div>

      {/* Visor embebido desde Canva */}
      <div className="cvViewer">
        <iframe
          src="https://www.canva.com/design/DAFzBB1HUFI/4TPVqlTrz12rdtRkU_UeDw/view?utm_content=DAFzBB1HUFI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h143d67e183&embed"
          style={{ border: "none", width: "100%", height: "100%" }}
          allowFullScreen
          title="CV"
        />
      </div>
    </section>
  );
};

export default CV;
