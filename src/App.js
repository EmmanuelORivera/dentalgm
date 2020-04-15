import React from "react";
import ReactDOM from "react-dom";
import Index from "./index";
import Navbar from "./components/Navbar/Navbar";
import Ortodoncia from "./components/Tratamientos/Tratamiento/Ortodoncia";
import Endodoncia from "./components/Tratamientos/Tratamiento/Endodoncia";
import Contactanos from "./components/Contactanos/Contactanos";
import Footer from "./components/Footer/Footer";
import Icono_Whatsapp from "./img/Icono-Whatsapp.svg";
import Icono_Telefono from "./img/Icono-Telefono.svg";
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
    return (
      <BrowserRouter>
        <Navbar
          Icono_Whatsapp={Icono_Whatsapp}
          Icono_Telefono={Icono_Telefono}
        />

        {/*<Redirect from="/" to="/inicio" />**/}
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/Tratamientos" exact component={tratamientos} />
          <Route path="/Tratamientos/Ortodoncia" render={Ortodoncia} />
          <Route path="/Tratamientos/Endodoncia" render={Endodoncia} />
          <Route path="/Contactanos" component={Contactanos} />
        </Switch>
        <Footer
          Icono_Whatsapp={Icono_Whatsapp}
          Icono_Telefono={Icono_Telefono}
        />
      </BrowserRouter>
    );
  }
}
