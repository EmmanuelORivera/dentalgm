import React from "../../node_modules/react";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.startingX = null;
    this.slider = React.createRef();
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.hidePrev = this.hidePrev.bind(this);
    this.hideNext = this.hideNext.bind(this);
  }

  handleTouchStart(e) {
    if(window.innerWidth >= 650){
      return;
    }
    let startingX = e.touches[0].clientX;

    this.startingX = startingX;
  }
  handleTouchMove(e) {
    if(window.innerWidth >= 650){
      return;
    }
    const { property, properties } = this.props.data;
    const loadPageStartingPoint =
      (property.id * (100 / properties.length)) / 100;
    const initialPositionPx =
      loadPageStartingPoint * this.slider.current.offsetWidth;
    let touch = e.touches[0];
    let change = touch.clientX - this.startingX - initialPositionPx;

    this.slider.current.className = `slider__wrapper `;
    if (touch.clientX - this.startingX < -30) {
      this.slider.current.style.transform = `translateX(${change}px)`;
    } else if (touch.clientX - this.startingX > 30) {
      this.slider.current.style.transform = `translateX(${change}px)`;
    }
  }

  handleTouchEnd(e) {
    if(window.innerWidth >= 650){
      return;
    }
    const { property, properties } = this.props.data;
    let change = e.changedTouches[0].clientX - this.startingX;
    this.slider.current.className = `slider__wrapper withTransition`;
    if (change < -50) {
      if (property.id !== properties.length - 1) {
        this.props.nextProperty();
      } else {
        const position = (properties.length - 1) * (100 / properties.length);
        this.slider.current.style.transform = `translateX(-${position}%)`;
      }
    } else if (change > 50) {
      if (property.id > 0) {
        this.props.prevProperty();
      } else {
        const position = 0;
        this.slider.current.style.transform = `translateX(${position}%)`;
      }
    } else {
      const position = property.id * (100 / properties.length);
      this.slider.current.style.transform = `translateX(-${position}%)`;
    }
  }
  hideNext(property, properties) {
    let x = { display: "block" };
    if (property.id === properties.length - 1) {
      x = { display: "none" };
    }
    return x;
  }
  hidePrev(property, properties) {
    let x = { display: "block" };
    if (property.id === 0) {
      x = { display: "none" };
    }
    return x;
  }
  render() {
    const { property, properties } = this.props.data;
    let style = { display: "block" };

    return (
      <div className="slider">
        <button
          className="slider__back-button button"
          onClick={this.props.prevProperty}
          disabled={property.id === 0}
          style={this.hidePrev(property, properties)}
        >
          &#60;
        </button>

        <div
          ref={this.slider}
          className={`slider__wrapper withTransition`}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          style={this.props.style}
        >
          {properties.map(property1 =>
            this.props.tarjeta(property1.id, property1, property)
          )}
        </div>

        <button
          className="slider__next-button button"
          onClick={this.props.nextProperty}
          disabled={property.id === properties.length - 1}
          style={this.hideNext(property, properties)}
        >
          >
        </button>
      </div>
    );
  }
}
