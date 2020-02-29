import React from 'react';
import Tarjeta from './Tarjeta';
import data from '../../data/tratamientos.js';
class Tratamientos extends React.Component{
    constructor(props){
        super(props);
        this.state={
            properties:data,
            property:data[2]
        };
    }
    nextProperty = ()=>{
        
        this.setState((state)=>({
            property:data[state.property.id + 1]
        }));
    }
    prevProperty = ()=>{
        this.setState((state)=>({
            property:data[state.property.id - 1]
        }));
    }
    render(){
        const {properties, property} = this.state;
        console.log("hola mundo");
        console.log(property);
        console.log(data.length);
        console.log(property.id*(100/properties.length));
        return(
        <section className="tratamientos">
            <button 
            onClick={()=>this.nextProperty()}
            disabled={property.id === (data.length-1)}
            >
                Siguiente
            </button>
            <button 
            onClick={()=>this.prevProperty()}
            disabled={property.id === 0}
            >
                Anterior
            </button>
            <h2>Nuestros Tratamientos</h2>
            <p>Conoce todo sobre los tratamientos que DentalGM ofrece para ti</p>
            <section className="tratamientos__tarjetas">
           <div className="slider">
           <div className="slider__wrapper" style={{
               'transform': `translateX(-${property.id*(100/properties.length)}%)`
           }}>
           {properties.map((property1)=><Tarjeta key={property1.id} property={property1} activa={property}/>)}
            
           </div>
           </div>
           
            </section>

        </section>

            );
    }
}
export default Tratamientos;