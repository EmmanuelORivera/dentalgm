import React from "../../../node_modules/react";
import Close from "../../img/Close.svg";
import { Link } from "react-router-dom";

export default class Overlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className={"inicio" + this.props.className}>
          <div className="overlay__top">
            <img
              onClick={this.props.onClick}
              className="closeBtn"
              src={Close}
              alt="Icono de cerrar"
            />
          </div>
          <nav>
            <ul className="overlay__bot">
              <li onClick={this.props.onClick}>
                <Link to={`/`}>Inicio</Link>
              </li>
              <li onClick={this.props.onClick}>
                <Link to={`/Tratamientos`}>Tratamientos</Link>
              </li>
              <li onClick={this.props.onClick}>
                <a href="#">¿Quiénes somos? </a>
              </li>
              <li onClick={this.props.onClick}>
                <Link to={`/Contactanos`}>Contactanos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
