import React from "react";
import Background from "../../../img/Consultorio.jpg";
import { Link } from "react-router-dom";

const Hero = (props) => (
  <>
    <img src={Background} alt="Fondo de imagen" />
    <div className="tratamiento-info">
      <h1>{props.tratamiento}</h1>
      <div className="boton">
        <Link className="boton__contenido" to="/Contactanos">
          ¿Tienes más preguntas?
        </Link>
      </div>
    </div>
  </>
);
export default Hero;
