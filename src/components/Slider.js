import React from '../../node_modules/react';
import Tarjeta from './Tratamientos/Tarjeta';

export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            startingX:null,
        }
        this.slider= React.createRef();
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }
    
    handleTouchStart(e){
        let startingX = e.touches[0].clientX;
        
        this.setState((state)=>({
            startingX:startingX
        }));

    }
    handleTouchMove(e){
        const {property,properties} = this.props.estado;
        const loadPageStartingPoint = (property.id*(100/properties.length))/100;
        const initialPositionPx = loadPageStartingPoint * this.slider.current.offsetWidth;
        let touch = e.touches[0];
        let change =  (touch.clientX - this.state.startingX)-initialPositionPx;
       
        this.slider.current.className=`slider__wrapper `;
        if(touch.clientX - this.state.startingX < -18){
            this.slider.current.style.transform= `translateX(${change}px)`;
        }else if(touch.clientX - this.state.startingX > 18){
            this.slider.current.style.transform= `translateX(${change}px)`;
        }
        

    }
    
    handleTouchEnd(e){
        const {property,properties} = this.props.estado;
        const source = 'tratamientos';
        let change = (e.changedTouches[0].clientX - this.state.startingX);
        this.slider.current.className=`slider__wrapper withTransition`;
        if(change < -50){
            if(property.id !== properties.length-1){
                this.props.nextProperty(source);
            }else{
                const position = ((properties.length-1)*(100/properties.length));
                this.slider.current.style.transform= `translateX(-${position}%)`;
            }
        }else if(change > 50){
            if(property.id > 0){
                this.props.prevProperty(source);
            }else{
                const position = 0;
                this.slider.current.style.transform= `translateX(${position}%)`;
            }
        }else{
            const position = ((property.id)*(100/properties.length));
            this.slider.current.style.transform= `translateX(-${position}%)`;

        }
    }
    render(){
        const {property,properties} = this.props.estado;
        return(
            <div className="slider">
                <button 
            className="slider__back-button button"
            onClick={this.props.prevProperty}
            disabled={property.id === 0}>
                &#60;
            </button>

            <div ref={this.slider} className={`slider__wrapper withTransition`} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd} style={this.props.style}>
                {properties.map((property1)=><Tarjeta  key={property1.id} property={property1} activa={property}/>)}
            </div>

            <button 
            className="slider__next-button button"
            onClick={this.props.nextProperty}
            disabled={property.id === (properties.length-1)}>
                >
            </button>
            </div>
        );
    }
}