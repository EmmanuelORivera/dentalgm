import React from "../../../node_modules/react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.svg";
import Triangulo from "../../img/Triangulo.svg";
import Menu from "../../img/Menu.svg";
import Boton from "../Boton";
import Overlay from "./Overlay";
import Data_Tratamientos from "../../data/tratamientos";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      closeMenu: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlecloseMenu = this.handlecloseMenu.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      showMenu: !state.showMenu,
      closeMenu: false,
    }));
  }
  handlecloseMenu() {
    this.setState((state) => ({
      showMenu: false,
      closeMenu: !state.closeMenu,
    }));
  }

  showMenu(state) {
    console.log("hola" + state.showMenu);
  }

  render() {
    /*
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("close-menu");

document.getElementById("open-menu").addEventListener('click',function(){showMenu(true)});
document.getElementById("close-menu").addEventListener('click',function(){showMenu(false)} );

function showMenu(menu){
    menu == true ? overlay.classList.add('show-menu') : overlay.classList.remove('show-menu');
}
*/
    const tratamientos = Data_Tratamientos.map((tratamiento) => tratamiento);
    const listItems = tratamientos.map((tratamiento) => (
      <li key={tratamiento.id}>{tratamiento.tratamiento}</li>
    ));
    console.log("TRATAMIENTOS " + tratamientos);
    const showMenu = this.state.showMenu;
    const closeMenu = this.state.closeMenu;
    let className = "";
    if (showMenu && !closeMenu) {
      className += " overlay";
    } else if (!showMenu && closeMenu) {
      className += " overlay closeMenu";
    }

    console.log(showMenu);
    console.log(closeMenu);
    console.log(className);
    return (
      <>
        <Overlay onClick={this.handlecloseMenu} className={className} />
        <header className="header" id="scrollToTop">
          <div className="header__complete">
            <span>DENTAL GM</span>
            <img onClick={this.handleClick} src={Menu} alt="Icono del menú" />
          </div>
          <div className="header__left">
            <img className="header__logo" src={Logo} alt="Logo" />
            <ul>
              <li>
                <Link to="/"> Inicio</Link>
              </li>
              <li>
                <div className="withTriangle">
                  Tratamientos <img src={Triangulo} alt="Triangulo" />
                  <div className="dropdown">
                    <ul>
                      {tratamientos.map((tratamiento) => (
                        <li key={`${tratamiento.id}`}>
                          <Link to={`/Tratamientos/${tratamiento.tratamiento}`}>
                            {tratamiento.tratamiento}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="withTriangle">
                  ¿Quiénes somos? <img src={Triangulo} alt="Triangulo" />
                </div>
              </li>
              <li>
                <Link to="/Contactanos">Contactanos</Link>
              </li>
            </ul>
          </div>
          <div className="header__right">
            <div className="buttons">
              <Boton
                className=""
                hrefProp="https://wa.me/526391017186?text=Hola Que Pasa"
                imgProp={this.props.Icono_Whatsapp}
                altProp="Logo de Whatsapp"
                content="639-117-56-46"
              />
              <Boton
                className="telefono "
                hrefProp="#"
                imgProp={this.props.Icono_Telefono}
                altProp="Logo de Telefono "
                content="639-117-56-46"
              />
            </div>
            <p>Contáctanos Desde Tu Célular</p>
          </div>
        </header>
      </>
    );
  }
}
export default Navbar;
