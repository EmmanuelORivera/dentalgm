import React from '../../../node_modules/react';
import Tarjeta from './Tarjeta';
import Persona1 from '../../img/Persona1.png';
/*import Persona2 from '../../img/Persona2.png';
import Persona3 from '../../img/Persona3.png';
import Diente from '../../img/Diente.svg';*/


export default class Testimonios extends React.Component{
    
    render(){
        return(
            <section className="testimonios">
            
            <h2>Orgullosos <span>de Nuestros Logros</span></h2>
            <p>
            Nuestros pacientes te cuentan sobre sus experiencias en nuestra
            clínica dental.
            </p>
            <section className="testimonios__tarjetas">
            <Tarjeta persona={Persona1}/>
            </section>
            </section>
        );
    }
}