import React from 'react';
import Flecha from '../../img/Flecha.svg';

export default class Tarjeta extends React.Component{
    render(){
      const {id,tratamiento,descripcion,imagen,color} = this.props.property;
      console.log(imagen);
      console.log(color);
      let activa = "";
      if(id === this.props.activa.id){
        activa += "activa";
      }
        return(
            <>
            
            <div id={`tarjeta-${id}`} className={`tarjeta ${activa}`}>
                <div className="tarjeta__contenedor">
                <img className="tarjeta__imagen" src={imagen} alt="Imagen del tratamiento"/>
                <p className="tarjeta__tratamiento">{tratamiento}</p>
                </div>
                <div className="tarjeta__info">
                <p className="tarjeta-info-descripcion">
                {descripcion}
                </p>
                </div>
                <div className="tarjeta__inferior">
                <p className="tarjeta-inferior-leer">Leer más <img src={Flecha} alt="Flecha indicando leer más"/></p>
                <div className="tarjeta-inferior-franja" style={{
                  'background':color
                }}></div>
                </div>
            </div>
            
</>
        );
            }
        }