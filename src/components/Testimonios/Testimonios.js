import React from "../../../node_modules/react";
import Data_Testimonios from "../../data/testimonios";
import Tarjeta from "./Tarjeta";
import Slider from "../Slider";
import Persona1 from "../../img/Persona1.png";
/*import Persona2 from '../../img/Persona2.png';
import Persona3 from '../../img/Persona3.png';
import Diente from '../../img/Diente.svg';*/

export default class Testimonios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: Data_Testimonios,
      property: Data_Testimonios[1]
    };
    this.nextProperty = this.nextProperty.bind(this);
    this.prevProperty = this.prevProperty.bind(this);
  }
  nextProperty = () => {
    const { properties, property } = this.state;
    this.setState(() => ({
      property: properties[property.id + 1]
    }));
  };
  prevProperty = () => {
    const { properties, property } = this.state;
    this.setState(() => ({
      property: properties[property.id - 1]
    }));
  };
  render() {
    console.log("aqui"+window.innerWidth);
    let { properties, property } = this.state;
    const loadPageStartingPoint = property.id * (100 / properties.length);
    const style = { transform: `translateX(-${loadPageStartingPoint}%)` };
    return (
      <section className="testimonios">
        <h2>
          Orgullosos <span>de Nuestros Logros</span>
        </h2>
        <p>
          Nuestros pacientes te cuentan sobre sus experiencias en nuestra
          clínica dental.
        </p>
        <section className="testimonios__tarjetas">
          <Slider
            data={this.state}
            prevProperty={() => this.prevProperty()}
            nextProperty={() => this.nextProperty()}
            style={style}
            tarjeta={(key, property, activa) => (
              <Tarjeta key={key} property={property} activa={activa} />
            )}
          />
        </section>
      </section>
    );
  }
}
