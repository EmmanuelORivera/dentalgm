import React from "../../../node_modules/react";

export default class Tarjeta extends React.Component {
  render() {
      console.log("ELEGIRNOS "+this.props.property.razon)
    const {
      id,
      razon,
      imagen,
      descripcion
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
         
        >
          <div className="tarjeta__imagen">
            <img src={imagen} alt="Persona que da el testimonio" />
          </div>
          <div className="tarjeta__testimonio">
            <blockquote>{razon}</blockquote>
            <p>{descripcion}</p>
          </div>
        </div>
      </>
    );
  }
}
