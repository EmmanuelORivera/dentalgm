import App from "./App";

import React from "react";
import ReactDOM from "react-dom";
import Hero from "./components/Hero/Hero";
import Tratamientos from "./components/Tratamientos/Tratamientos";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Testimonios from "./components/Testimonios/Testimonios";
import Elegirnos from "./components/Elegirnos/Elegirnos";
import Boton_Messenger from "./img/Boton-Messenger.svg";

import Data_Tratamientos from "./data/tratamientos";
import Data_Testimonios from "./data/testimonios";

export default class Index extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Tratamientos />
        <QuienesSomos />
        <Testimonios />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
