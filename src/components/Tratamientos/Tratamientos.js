import React from "react";
import Slider from "../Slider";
//import data from '../../data/tratamientos.js';
export default class Tratamientos extends React.Component {
  render() {
    let { properties, property } = this.props.estado;
    const source = "tratamientos";
    const loadPageStartingPoint = property.id * (100 / properties.length);
    const style = { transform: `translateX(-${loadPageStartingPoint}%)` };
    return (
      <>
        <section className="tratamientos">
          <h2>Nuestros Tratamientos</h2>
          <p>Conoce todo sobre los tratamientos que DentalGM ofrece para ti</p>
          <section className="tratamientos__tarjetas">
            <Slider
              estado={this.props.estado}
              prevProperty={() => this.props.prevProperty(source)}
              nextProperty={() => this.props.nextProperty(source)}
              style={style}
            />
          </section>
        </section>
      </>
    );
  }
}
