import React from "react";
import Hero from "../Hero";
import Contenido from "./Contenido";
const Ortodoncia = () => (
  <>
    <section className="tratamiento-hero">
      <Hero tratamiento="Servicio de Endodoncia" />
    </section>
    <section className="informacion">
      <div className="informacion__margen">
        <Contenido />
      </div>
    </section>
  </>
);
export default Ortodoncia;
