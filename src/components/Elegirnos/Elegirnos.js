import React from '../../../node_modules/react';
import Razon from './Razon';
import Profesional from '../../img/Profesionales.svg'
import Resultados_Optimos from '../../img/Resultados-Optimos.svg'
import Pacientes_Satisfechos from '../../img/Pacientes-Satisfechos.svg'
import Atencion_Personalizada from '../../img/Atencion-Personalizada.svg'
import Confianza from '../../img/Confianza.svg'
import Disponibilidad from '../../img/Disponibilidad.svg'
export default class Elegirnos extends React.Component{
    render(){
        return(
            <div className="contenedor-blanco">
            <section className="secciones">
            <h2>¿Por qué elegir DentalGM?</h2>
            <section className="section-razon">
            <Razon src={Profesional}/>
            <Razon src={Resultados_Optimos}/>
            <Razon src={Pacientes_Satisfechos}/>
            <Razon src={Atencion_Personalizada}/>
            <Razon src={Confianza}/>
            <Razon src={Disponibilidad}/>
            </section>

            </section>

            </div>

        );
    }
}