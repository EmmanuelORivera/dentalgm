import React from "../../../node_modules/react";
import Comillas_Apertura from "../../img/Comillas-Apertura.svg";
import Comillas_Cierre from "../../img/Comillas-Cierre.svg";
import Testimonio_Fondo from "../../img/Testimonio-Fondo.svg";

export default class Tarjeta extends React.Component {
  handleClick(e, activa) {
    console.log("ENTRA AQUI");
    console.log(e.currentTarget.classList.contains(activa));
  }
  render() {
    const {
      id,
      nombre,
      imagen,
      testimonio,
      backgroundColor,
      border
    } = this.props.property;
    let activa = "";
    if (id === this.props.activa.id) {
      activa += "activa";
    }
    return (
      <>
        <div
          id={`tarjeta-${id}`}
          className={`tarjeta ${activa}`}
          onClick={e => this.handleClick(e, activa)}
          style={{ background: backgroundColor, border: border }}
        >
          <div className="tarjeta__imagen">
            <img src={imagen} alt="Persona que da el testimonio" />
          </div>
          <div className="tarjeta__testimonio">
            <blockquote>{testimonio}</blockquote>
            <p>{nombre}</p>
          </div>
        </div>
      </>
    );
  }
}
