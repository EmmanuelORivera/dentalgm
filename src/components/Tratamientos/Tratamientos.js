import React from "react";
import Slider from "../Slider";
import Tarjeta from "./Tarjeta";
import Data_Tratamientos from "../../data/tratamientos";
export default class Tratamientos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: Data_Tratamientos,
      property: Data_Tratamientos[2]
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
    let { properties, property } = this.state;
    const loadPageStartingPoint = property.id * (100 / properties.length);
    const style = { transform: `translateX(-${loadPageStartingPoint}%)` };
    let x = window.innerWidth;
    console.log(x);
    return (
      <>
        <section className="tratamientos">
          <h2>Nuestros Tratamientos</h2>
          <p>Conoce todo sobre los tratamientos que DentalGM ofrece para ti</p>
          <section className="tratamientos__tarjetas">
            {/*properties.map(property1 => (
              <Tarjeta
                key={property1.id}
                property={property1}
                activa={property}
              />
            ))*/}

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
      </>
    );
  }
}
