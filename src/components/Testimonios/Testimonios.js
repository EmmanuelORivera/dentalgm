import React from '../../../node_modules/react';
import Tarjeta from './Tarjeta';
import Persona1 from '../../img/Persona1.png';
import Persona2 from '../../img/Persona2.png';
import Persona3 from '../../img/Persona3.png';
import Diente from '../../img/Diente.svg';

export default class Testimonios extends React.Component{
    render(){
        return(
        <div className="contenedor-testimonios">

            <section className="secciones section-testimonios">
            
            <h2>Orgullosos de nuestros logros</h2>
            <p>
            Nuestros pacientes te cuentan sobre sus experiencias en nuestra
            clínica dental.
            </p>
            <section className="testimonios-tarjetas">
            <Tarjeta persona={Persona1}/>
            <Tarjeta persona={Persona2}/>
            <Tarjeta persona={Persona3}/>
            </section>
            </section>
        </div>
        );
    }
}