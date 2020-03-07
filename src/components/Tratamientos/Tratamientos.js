import React from 'react';
import Tarjeta from './Tarjeta';
//import data from '../../data/tratamientos.js';
class Tratamientos extends React.Component{
    constructor(props){
        super(props);
        this.state={
            startPoint:0,
            endPoint:0,
            move:0,
            sliderWidth:0
        }
        this.slider = React.createRef();
        this.touchMove = this.touchMove.bind(this);
        this.touchStart = this.touchStart.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
        this.sliderMove = this.sliderMove.bind(this);
    }
    
    touchMove = (e)=>{
        
        const moveX = e.touches[0].clientX;
        this.setState((state)=>({
            move:moveX,
            sliderWidth:this.slider.current.offsetWidth
        }));
    }
    touchStart = (e)=>{
        const startX = e.touches[0].clientX;
        this.setState((state)=>({
            startPoint:startX
        }));
    }
    touchEnd = (e)=>{
        const endX = e.changedTouches[0].pageX;
        this.setState((state)=>({
            endPoint:endX
        }));
    }
    sliderMove(move,startPoint,sliderWidth,windowWidth){
        let movementX,porcentageWindowX,porcentageSliderX;    
        
        movementX=move-startPoint;
        porcentageWindowX=(movementX*100)/windowWidth;
    
        porcentageSliderX=(porcentageWindowX*sliderWidth)/windowWidth;
        if(porcentageSliderX < (100/6)*-5){
            porcentageSliderX =(100/6)*-5;
        }else if(porcentageSliderX > 0){
            porcentageSliderX= 0;
        }
        return porcentageSliderX;
    }
    render(){
        const {properties, property} = this.props.estado;
        const source = 'tratamientos';
        /*console.log("hola mundo");
        console.log(property);
        console.log(property.id*(100/properties.length));
        console.log(properties);
        console.log(property);*/
        let {startPoint,move,endPoint,sliderWidth}= this.state;
        let windowWidth = window.innerWidth;
        console.log("SLIDER"+sliderWidth);
        startPoint=parseFloat(startPoint);
        move=parseFloat(move);
        endPoint=parseFloat(endPoint);
        
        console.log(">>>>>>>>>>>>>>>>>>>>start"+startPoint);
        console.log("move"+move);
        console.log("end"+endPoint);
        let slide
        if(startPoint!=endPoint ){
            slide=this.sliderMove(move,startPoint,sliderWidth,windowWidth)
        }

        
        //`translateX(-${property.id*(100/properties.length)}%)`
        
        
        return(
            <>
            <button 
            onClick={()=>this.props.nextProperty(source)}
            disabled={property.id === (properties.length-1)}
            >
                Siguiente
            </button>
            <button 
            onClick={()=>this.props.prevProperty(source)}
            disabled={property.id === 0}
            >
                Anterior
            </button>
        <section className="tratamientos">
            
            <h2>Nuestros Tratamientos</h2>
            <p>Conoce todo sobre los tratamientos que DentalGM ofrece para ti</p>
            <section className="tratamientos__tarjetas">
                <div className="slider" onTouchMove={this.touchMove} onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
                <div className="slider__back-button"></div>
                <div ref={this.slider} className="slider__wrapper" style={{
                    'transform': `translateX(${slide}%)`
                }}>
                {properties.map((property1)=><Tarjeta key={property1.id} property={property1} activa={property}/>)}
                </div>
                <div className="slider__next-button"></div>
                </div>
            </section>

        </section>
            </>
            );
    }
}
export default Tratamientos;