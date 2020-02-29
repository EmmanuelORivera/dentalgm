import React from '../../../node_modules/react';
import Integrantes from '../../img/Integrantes.jpg';
export default class QuienesSomos extends React.Component{

    render(){
        return(
            <div className="contenedor-blanco">
            <section className="secciones section-quienessomos">
            <h2>¿Quiénes somos?</h2>
            <p>
                Te presentamos al equipo de especialistas que estará contigo 
                durante el proceso del tratamiento.
            </p>
            <img src={Integrantes} alt="Integrantes de DentalGM"/>
            <p>

            <div className="centrar">
            <a className="boton-azul" href="#">Conoce nuestra trayectoria</a>
            </div>
            </p>
            </section>
            </div>
        );
    }
}