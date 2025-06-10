import './Contacto.css';

const Contacto = () => {
  return (
    <section>
      <section>
        <h2>Contacto</h2>

        <form className="contactoForm" action="/">
          <label htmlFor="nombre">Nombre</label>

          <input type="text" id="nombre" name="nombre" />

          <label htmlFor="lemail">Email</label>

          <input type="email" id="email" name="email" />

          <label htmlFor="mensaje">Mensaje</label>

          <textarea type="text" id="mensaje" name="mensaje" />

          <button type="submit" value="Submit">
            Enviar
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contacto;
