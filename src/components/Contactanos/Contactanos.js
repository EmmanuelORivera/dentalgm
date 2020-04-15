import React from "../../../node_modules/react";
import Background from "../../img/Calendario.jpg";
import Boton from "../Boton";
import Icono_Whatsapp from "../../img/Icono-Whatsapp.svg";
import Icono_Telefono from "../../img/Icono-Telefono.svg";

const Contactanos = () => (
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
        <h2>Elige la mejor opción de contacto para ti</h2>
        <h3>1. Contacto Vía Whatsapp o Teléfono</h3>
        <p>Puedes hacernos tus preguntas vía WhatsApp al siguiente número:</p>
        <div className="buttons">
          <Boton
            className=""
            hrefProp="https://wa.me/526391017186?text=Hola Que Pasa"
            imgProp={Icono_Whatsapp}
            altProp="Logo de Whatsapp"
            content="639-117-56-46"
          />
          <Boton
            className="telefono "
            hrefProp="#"
            imgProp={Icono_Telefono}
            altProp="Logo de Telefono "
            content="639-117-56-46"
          />
        </div>
        <h3>2. Contacto Vía Teléfono</h3>
        <p>Para hablar a nuestra oficina puedes llamar al siguiente número:</p>
        <h3>3. Contacto Vía Formulario</h3>
        <p>
          Completa el formulario siguiente para enviar tu información de
          contacto, comentarios/preguntas.
        </p>
      </div>
    </section>
  </>
);
export default Contactanos;
