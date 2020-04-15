import App from "./App";

import React from "react";
import ReactDOM from "react-dom";
import Hero from "./components/Hero/Hero";
import Tratamientos from "./components/Tratamientos/Tratamientos";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Testimonios from "./components/Testimonios/Testimonios";
import Elegirnos from "./components/Elegirnos/Elegirnos";
import Footer from "./components/Footer/Footer";
import Boton_Messenger from "./img/Boton-Messenger.svg";

import Icono_Whatsapp from "./img/Icono-Whatsapp.svg";
import Icono_Telefono from "./img/Icono-Telefono.svg";

import Data_Tratamientos from "./data/tratamientos";
import Data_Testimonios from "./data/testimonios";

export default class Index extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Tratamientos />
        <QuienesSomos />
        <Testimonios/>
        <Footer Icono_Whatsapp={Icono_Whatsapp} Icono_Telefono={Icono_Telefono}/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
