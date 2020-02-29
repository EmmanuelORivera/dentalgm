import React from '../../../node_modules/react';
export default class Razon extends React.Component{
    render(){
        return(
            <div className="razon">
            <img src={this.props.src} alt="Icono sobre una de las distintas razones por las que elegir DentalGM"/>
            <h3>Profesionales</h3>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            </div>
        );
    }
}