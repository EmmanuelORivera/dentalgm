import React from '../../../node_modules/react';
import Comillas_Apertura from '../../img/Comillas-Apertura.svg';
import Comillas_Cierre from '../../img/Comillas-Cierre.svg';
import Testimonio_Fondo from '../../img/Testimonio-Fondo.svg';

export default class Tarjeta extends React.Component{
    render(){
        return(
          <>
          <div className="testimonio">
          <div className="testimonio-persona">
          <img src={this.props.persona} alt="Persona que da el testimonio"/>
          </div>
          <div className="testimonio-fondo">
          <img src={Comillas_Apertura} alt="Comillas de apertura"/>
          <div className="testimonio-fondo-cita">
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          </p>
          </div>
          <img className="testimonio-fondo-cierre" src={Comillas_Cierre} alt="Comillas de cierre"/>

          <p>
              - Jhon Doe
          </p>
          </div>
          </div>
          </>
        );
    }
        }