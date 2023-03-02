import React from "react";
import "./styles/llamado.css";

const LLamado = () => {
  return (
    <main className="llamado_main">
      <section className="llamados sala">
        <p>Sala 4</p>
      </section>
      <section className="play">
        <i class="bx bxs-right-arrow-circle"></i>
      </section>
      <section className="llamados">
        <p>Hospitalizacion</p>
      </section>
      <section className="llamados">
        <p>{`${4}s`}</p>
      </section>
    </main>
  );
};

export default LLamado;
