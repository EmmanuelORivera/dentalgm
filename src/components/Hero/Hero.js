import React from '../../../node_modules/react';
import Background from '../../img/Hero.jpg';
class Hero extends React.Component{
    
    render(){
        return(
            <section className="hero">
                <img className="hero__background" src={Background} alt="Imagen de fondo"/>
                <div className="hero__info">
                    <p>
                    "Atención y calidad que <span>van de boca en boca"</span>
                    </p>
                    <div className="boton">
                    <a  className="boton__contenido" href="#">Agenda tu cita</a>
                    </div>
                </div>
            </section>
        );
    }
}
export default Hero;