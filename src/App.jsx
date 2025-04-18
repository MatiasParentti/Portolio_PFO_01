import "./App.css";
import fotoPerfil from "./assets/foto.jpg";

function App() {
  return (
    <>
      <div className="oswald-font container ">

        {/*About */}

        <h1>PFO 01 - Matias Parentti</h1>

        <h2>About</h2>

        <div>
          <img
            className="fotoPerfil"
            src={fotoPerfil}
            alt="fotoPerfil"
            width={100}
            height={100}
          />
        </div>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div>
          <a>more</a>
        </div>

       



        {/*Tabla */}

        <h2>Skills</h2>

        <div className="tableContainer">
          <table id="tableSkills">
            <thead>
              <tr>
                <th colSpan="3">Tecnologias - Skills</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>HTML</td>
              <td>CSS</td>
              <td>Javascript</td>
            </tr>
            <tr>
              <td>Node</td>
              <td>React</td>
              <td>Angular</td>
            </tr>
            </tbody>
          
          </table>
        </div>

        {/*Formulario */}

        <h2>Contacto</h2>

        <form className="StyledForm" action="/">
          <label htmlFor="fnombre">Nombre</label>

          <input type="text" id="fnombre" name="fnombre"  />

          <label htmlFor="fapellido">Apellido</label>

          <input type="text" id="fapellido" name="fapellido"  />

          <label htmlFor="fnumero">Numero</label>

          <input type="number" id="fnumero" name="fnumero"  />

          <label htmlFor="lemail">Email</label>

          <input type="email" id="lemail" name="lemail" />

          <button type="submit" value="Submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
