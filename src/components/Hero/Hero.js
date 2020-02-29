import React from '../../../node_modules/react';
import Background from '../../img/Hero.jpg';
class Hero extends React.Component{
    
    render(){
        return(
            <section className="hero">
                <img className="hero__background" src={Background} alt="Imagen de fondo"/>
                <p>
                "Atención y calidad que <span>van de boca en boca"</span>
                <div className="centrar">
                <a className="boton-azul" href="#">Agenda tu cita</a>
                </div>
                </p>
            </section>
        );
    }
}
export default Hero;