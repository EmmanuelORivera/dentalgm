import React from "../../../node_modules/react";
import Razon from "./Razon";
import Data_Razones from "../../data/razones";
import Slider from "../Slider";
import Tarjeta from "./Tarjeta";
export default class Elegirnos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: Data_Razones,
      property: Data_Razones[2],
    };
    this.nextProperty = this.nextProperty.bind(this);
    this.prevProperty = this.prevProperty.bind(this);
  }

  nextProperty = () => {
    const { properties, property } = this.state;
    this.setState(() => ({
      property: properties[property.id + 1],
    }));
  };
  prevProperty = () => {
    const { properties, property } = this.state;
    this.setState(() => ({
      property: properties[property.id - 1],
    }));
  };
  render() {
    let { properties, property } = this.state;
    console.log("ID" + property.id + " Long" + properties.length);
    const loadPageStartingPoint = property.id * (100 / properties.length);
    const style = { transform: `translateX(-${loadPageStartingPoint}%)` };
    return (
      <section className="contenedor">
        <section className="testimonios" id="razones">
          <h2>¿Por qué elegir DentalGM?</h2>

          <section className="testimonios__tarjetas asd">
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
      </section>
    );
  }
}
