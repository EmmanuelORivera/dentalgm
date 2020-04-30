import React from "../../../node_modules/react";
import Boton from "../Boton";
import Lugar from "../../img/Lugar.svg";
import Tiempo from "../../img/Tiempo.svg";
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleDisplay: { display: "grid" },
    };
  }
  shouldComponentUpdate() {
      console.log("SI");
  }
  
  render() {
    const mensaje =
      "Hola que tal Dental GM, me gustaría tener más información sobre sus tratamientos.";
    const linkWhatsApp = "https://wa.me/526391017186?text=" + mensaje;
    const pathName = window.location.pathname;
    
    return (
      <footer className="footer">
        <div className="footer__superior">
          <div className="izquierda">
            <h2>Contactanos</h2>
            <div className="buttons" style={this.state.styleDisplay}>
              <Boton
                className="test"
                hrefProp={linkWhatsApp}
                imgProp={this.props.Icono_Whatsapp}
                altProp="Whatsapp Logo"
                content="639-117-56-46"
              />
              <Boton
                className="telefono"
                hrefProp="tel:+526391017186"
                imgProp={this.props.Icono_Telefono}
                altProp="Whatsapp Logo"
                content="639-117-56-46"
              />
            </div>
            <div className="alinear">
              <img className="lugar" src={Lugar} alt="Icono que indica lugar" />
              <p className="direccion">
                Av. 4 Sur #208, Sur 1, 33000
                <span> Cd. Delicias, Chih.</span>
              </p>

              <img
                className="tiempo"
                src={Tiempo}
                alt="Icono que indica lugar"
              />
              <p className="entre-semana">
                Lunes - Viernes
                <span>10a.m - 8p.m</span>
              </p>

              <p className="sabado">
                Sábado
                <span>10a.m - 8p.m</span>
              </p>
              <p className="domingo">
                Domingo
                <span>Cerrado</span>
              </p>
            </div>
          </div>
          <div className="derecha">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.609333487509!2d-105.47498738492742!3d28.188794182595032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86eb15b9a1f56b19%3A0x6e7ae5fcd2f9944a!2sAv.%204%20Sur%20208%2C%20Sur%201%2C%2033000%20Delicias%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1582150788410!5m2!1ses-419!2smx"
              frameBorder="0"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
        <div className="footer__inferior">
          <p>Copyright Dental GM</p>
        </div>
      </footer>
    );
  }
}
