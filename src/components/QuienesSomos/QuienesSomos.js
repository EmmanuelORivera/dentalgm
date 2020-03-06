import React from '../../../node_modules/react';
import Integrantes from '../../img/Integrantes.jpg';
export default class QuienesSomos extends React.Component{

    render(){
        return(
            <section className="quienessomos">
            <div className="quienessomos__contenido">
                <h2>¿Quiénes somos?</h2>
                <p>
                    Te presentamos al equipo de especialistas que estará contigo 
                    durante el proceso del tratamiento.
                </p>
                <img src={Integrantes} alt="Integrantes de DentalGM"/>
                
                <div className="boton">
                    <a className="boton__contenido" href="#">Conoce nuestra trayectoria</a>
                </div>
            </div>
            
            </section>
        );
    }
}