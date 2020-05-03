import React from "../../../node_modules/react";
import Background from "../../img/Hero.jpg";
import { Link } from "react-router-dom";
class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <img
          className="hero__background"
          src={Background}
          alt="Imagen de fondo"
        />
        <div className="hero__info">
          <p>
            "Atención y calidad que <span>van de boca en boca"</span>
          </p>
          <div className="boton">
            <Link className="boton__contenido" to="/Contactanos">
              Agenda tu cita
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
export default Hero;
