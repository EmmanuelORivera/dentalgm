import React from '../../../node_modules/react';
import Logo from '../../img/Logo.svg';
import Icono_Telefono from '../../img/Icono-Telefono.svg';
import Triangulo from '../../img/Triangulo.svg';
import Menu from '../../img/Menu.svg';
import Boton from '../Boton';
import Overlay from './Overlay';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu : false,
            closeMenu : false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handlecloseMenu = this.handlecloseMenu.bind(this);
    }
    handleClick() {
        this.setState(state=>({
            showMenu : !state.showMenu,
            closeMenu : false
        }));
    }
    handlecloseMenu() {
        this.setState(state=>({
            showMenu : false,
            closeMenu : !state.closeMenu
        }));
    }
   
   
    showMenu(state) {
        console.log("hola"+state.showMenu);
    }
    
    render(){
        /*
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("close-menu");

document.getElementById("open-menu").addEventListener('click',function(){showMenu(true)});
document.getElementById("close-menu").addEventListener('click',function(){showMenu(false)} );

function showMenu(menu){
    menu == true ? overlay.classList.add('show-menu') : overlay.classList.remove('show-menu');
}
*/
    const showMenu = this.state.showMenu;
    const closeMenu = this.state.closeMenu;
    let className = '';
    if(showMenu && !closeMenu){
        className += ' overlay';
    }else if(!showMenu && closeMenu){
        className += ' overlay closeMenu';
    }
    
    console.log(showMenu);
    console.log(closeMenu);
    console.log(className);
        return(
            <>
            <Overlay onClick={this.handlecloseMenu} className={className}/>
            <header className="header">

            
            
            <div className="header__complete">
                <span>DENTALGM</span> <img onClick={this.handleClick} src={Menu} alt="Icono del menú"/>
            </div>
            <div className="header__left">
                <img className="header__logo" src={Logo} alt="Logo" />
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li> <a href="#"><div className="withTriangle">Tratamientos <img src={Triangulo} alt="Triangulo"/></div> </a></li>
                    <li> <a href="#">¿Quiénes somos? <img src={Triangulo} alt="Triangulo"/></a></li>
                    <li><a href="#">Contactanos</a></li>
                </ul>
            </div>
            <div className="header__right">
                <div className="buttons">
                <Boton className="test" hrefProp="#" imgProp={this.props.Icono_Whatsapp} altProp="Whatsapp Logo" content="639-117-56-46"/>
                <Boton className="test" hrefProp="#" imgProp={this.props.Icono_Whatsapp} altProp="Whatsapp Logo" content="639-117-56-46"/>
                </div>
                <p>Contáctanos Desde Tu Célular</p>
            </div>
            </header>
            </>
        );
    }
    
}
export default Navbar;
