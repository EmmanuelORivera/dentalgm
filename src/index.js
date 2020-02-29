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



class Index extends React.Component{
    
    render(){
        return(
            <>
            <Navbar/>
            <Tratamientos/>
            <Hero/>
            </>
        );
    }
}

ReactDOM.render(<Index/>,document.getElementById('root'));