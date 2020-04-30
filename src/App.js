import React from "react";
import ReactDOM from "react-dom";
import Index from "./index";
import Navbar from "./components/Navbar/Navbar";
import Ortodoncia from "./components/Tratamientos/Tratamiento/Ortodoncia/Ortodoncia";
import Endodoncia from "./components/Tratamientos/Tratamiento/Endodoncia/Endodoncia";
import Implantes from "./components/Tratamientos/Tratamiento/Implantes/Implantes";
import Periodoncia from "./components/Tratamientos/Tratamiento/Periodoncia/Periodoncia";
import Odontopediatría from "./components/Tratamientos/Tratamiento/Odontopediatría/Odontopediatría";
import Cirugía from "./components/Tratamientos/Tratamiento/Cirugía/Cirugía";
import Contactanos from "./components/Contactanos/Contactanos";
import Footer from "./components/Footer/Footer";
import Icono_Whatsapp from "./img/Icono-Whatsapp.svg";
import Icono_Telefono from "./img/Icono-Telefono.svg";
import Tratamientos from "./components/Tratamientos/Tratamientos";
import ScrollToTop from "./components/ScrollToTop";
import css from "./css/main.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const tratamientos = () => {
  return <h1>Tratamientos</h1>;
};
const error = () => {
  return <h1>ERROR 404</h1>;
};

export default class App extends React.Component {
  render() {
    console.log(window.location.pathname);
    return (
      <BrowserRouter>
      <ScrollToTop />
        <Navbar
          Icono_Whatsapp={Icono_Whatsapp}
          Icono_Telefono={Icono_Telefono}
        />

        {/*<Redirect from="/" to="/inicio" />**/}
        <Switch>
          <Route path="/" exact component={Index} /> 
          <Route path="/Tratamientos" exact component={Tratamientos} />
          <Route path="/Tratamientos/Ortodoncia" render={Ortodoncia} />
          <Route path="/Tratamientos/Endodoncia" render={Endodoncia} />
          <Route path="/Tratamientos/Implantes" render={Implantes} />
          <Route path="/Tratamientos/Periodoncia" render={Periodoncia} />
          <Route path="/Tratamientos/Odontopediatría" render={Odontopediatría} />
          <Route path="/Tratamientos/Cirugía" render={Cirugía} />
          <Route path="/Contactanos" component={Contactanos} />
        </Switch>
        <Footer
          test={"this is a test"}
          Icono_Whatsapp={Icono_Whatsapp}
          Icono_Telefono={Icono_Telefono}
        />
      </BrowserRouter>
    );
  }
}
