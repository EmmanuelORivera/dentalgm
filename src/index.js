import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Tratamientos from './components/Tratamientos/Tratamientos';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import Testimonios from './components/Testimonios/Testimonios';
import Elegirnos from './components/Elegirnos/Elegirnos';
import Footer from './components/Footer/Footer';
import Boton_Messenger from './img/Boton-Messenger.svg'

import Icono_Whatsapp from './img/Icono-Whatsapp.svg';

import css from './css/main.css';

import Data_Tratamientos from './data/tratamientos';
import Data_Testimonios from './data/testimonios';
class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            properties:Data_Tratamientos,
            property:Data_Tratamientos[2],
            propertiesTestimonios:Data_Testimonios,
            propertyTestimonios:Data_Testimonios[1]
        };
        this.nextProperty = this.nextProperty.bind(this);
        this.prevProperty = this.prevProperty.bind(this);
    }

    getData =(source)=>{
        let data,id,objeto;
        switch (source){
            case 'tratamientos':
                data = Data_Tratamientos;
                id = this.state.property.id; 
            break;
            case 'testimonios':
                data = Data_Testimonios;
                id = this.state.property.id;
        }
        objeto={"id":id,"data":data};
        return objeto; 
    }

    nextProperty = (source)=>{
        const {id,data} = this.getData(source);
        this.setState((state)=>({
            property:data[id + 1]
        }));
    }
    prevProperty = (source)=>{
        const {id,data} = this.getData(source);
        this.setState((state)=>({
            property:data[id - 1]
        }));
    }
    render(){
        return(
            <>
            <Navbar/>
            <Hero/>
            <Tratamientos nextProperty={this.nextProperty} prevProperty={this.prevProperty} estado={this.state}/>
            <QuienesSomos/>
            <Testimonios/>
            <p>holaholaholaholaholahola</p>
            </>
        );
    }
}

ReactDOM.render(<Index/>,document.getElementById('root'));