import React from "react";
import Flecha from "../../img/Flecha.svg";
import { Link } from "react-router-dom";
export default class Tarjeta extends React.Component {
  handleClick(e, activa) {
    console.log("ENTRA AQUI");
    console.log(e.currentTarget.classList.contains(activa));
  }
  render() {
    const { id, tratamiento, descripcion, imagen, color } = this.props.property;
    let activa = "";
    if (id === this.props.activa.id) {
      activa += "activa";
    }
    return (
      <>
        <Link to={`/Tratamientos/${tratamiento}`}>
          <div
            id={`tarjeta-${id}`}
            className={`tarjeta ${activa}`}
            onClick={(e) => this.handleClick(e, activa)}
          >
            <div className="tarjeta__contenedor">
              <img
                className="tarjeta__imagen"
                src={imagen}
                alt="Imagen del tratamiento"
              />
              <p className="tarjeta__tratamiento">{tratamiento}</p>
            </div>
            <div className="tarjeta__info">
              <p className="tarjeta-info-descripcion">{descripcion}</p>
            </div>
            <div className="tarjeta__inferior">
              <p className="tarjeta__inferior-leer">
                Leer más <img src={Flecha} alt="Flecha indicando leer más" />
              </p>
              <div
                className="tarjeta-inferior-franja"
                style={{
                  background: color,
                }}
              ></div>
            </div>
          </div>
        </Link>
      </>
    );
  }
}
