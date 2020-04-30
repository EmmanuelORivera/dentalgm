import React from "react";
import Hero from "../Hero";
import Contenido from "./Contenido";
const Periodoncia = () => (
  <>
    <section className="tratamiento-hero">
      <Hero tratamiento="Servicio de Periodoncia" />
    </section>
    <section className="informacion">
      <div className="informacion__margen">
        <Contenido />
      </div>
    </section>
  </>
);
export default Periodoncia;
