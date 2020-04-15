import React from "../../../node_modules/react";
import Background from "../../img/Calendario.jpg";
import Boton from "../Boton";
import Icono_Whatsapp from "../../img/Icono-Whatsapp.svg";
import Icono_Telefono from "../../img/Icono-Telefono.svg";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class Contactanos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nombre: "", correo: "", telefono: "", opcion: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

  }
  render() {
    const withoutBorder = { border: "none" };
    const withBorder = { borderBottom: "1px solid #e5e5e5" };
    const { nombre, correo, telefono, opcion } = this.state;
    return (
      <>
        <section className="tratamiento-hero">
          <img src={Background} alt="Fondo de imagen" />
          <div className="tratamiento-info">
            <h1>Agenda tu cita</h1>
            <p>¿Tienes dudas? entonces puedes mandar un mensaje o llámarnos</p>
          </div>
        </section>
        <section className="informacion">
          <div className="informacion__margen">
            <h2 style={withoutBorder}>
              Elige la mejor opción de contacto para ti
            </h2>
            <h3 style={withBorder}>1. Contacto Vía Formulario</h3>
            <p>
              Puedes completar el siguiente formulario para enviar tu
              información de contacto, comentarios/preguntas y nosotros
              estaremos en contacto contigo.
            </p>
            <form onSubmit={this.handleSubmit} data-netlify="true">
              <p>
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={nombre}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label>Correo electrónico</label>
                <input
                  type="email"
                  name="correo"
                  value={correo}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label>Número telefónico</label>
                <input
                  type="text"
                  name="telefono"
                  value={telefono}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label>
                  ¿Cómo supiste sobre Dental GM?
                  <select
                    name="opcion"
                    value={opcion}
                    onChange={this.handleChange}
                  >
                    <option value="Buscando en Google">
                      Buscando en Google
                    </option>
                    <option value="Amigos/Familiares">Amigos/Familiares</option>
                    <option value="Anuncios">Anuncios</option>
                    <option value="Redes sociales">Redes sociales</option>
                    <option value="Otro">Otro</option>
                  </select>
                  <button type="submit">Enviar</button>
                </label>
              </p>
            </form>
            <h3 style={withBorder}>2. Contacto Vía WhatsApp o Llamada</h3>
            <p>
              Si te encuentras en el célular puedes abrir tu aplicación o
              realizar una llamada presionando los siguientes botones:
            </p>
            <div className="buttons">
              <Boton
                className="maxwidth"
                hrefProp="https://wa.me/526391017186?text=Hola Que Pasa"
                imgProp={Icono_Whatsapp}
                altProp="Logo de Whatsapp"
                content="639-117-56-46"
              />
              <Boton
                className="telefono maxwidth"
                hrefProp="#"
                imgProp={Icono_Telefono}
                altProp="Logo de Telefono "
                content="639-117-56-46"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Contactanos;
