import React from "../../../node_modules/react";
import Background from "../../img/Calendario.jpg";
import Boton from "../Boton";
import Icono_Whatsapp from "../../img/Icono-Whatsapp.svg";
import Icono_Telefono from "../../img/Icono-Telefono.svg";

const encode = (data) => {
  console.log(data);
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
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => {
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": form.getAttribute("name"), ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };
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
            <form name="contact" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label>
                  Your Name: <input type="text" name="nombre" />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="correo" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="mensaje"></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
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
