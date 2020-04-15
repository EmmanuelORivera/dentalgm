import React from "../../node_modules/react";

export default class Boton extends React.Component {
  render() {
    return (
      <>
        <a className={this.props.className} href={this.props.hrefProp}>
          <img src={this.props.imgProp} alt={this.props.altProp} />
          <span> {this.props.content}</span>
        </a>
      </>
    );
  }
}
