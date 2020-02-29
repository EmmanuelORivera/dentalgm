import React from '../../../node_modules/react';
import Close from '../../img/Close.svg';

export default class Overlay extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <div className={'inicio' + this.props.className}>
            <div className="overlay__top">
            <img onClick={this.props.onClick} className="closeBtn" src={Close} alt="Icono de cerrar" />
            </div>
            <nav >
            <ul className="overlay__bot">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Tratamientos</a></li>
                <li><a href="#">¿Quiénes somos? </a></li>
                <li><a href="#">Contactanos</a></li>
            </ul>
            </nav>
            </div>
            </>
        )
     }
}
