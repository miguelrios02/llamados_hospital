import React from "react";

import "./styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <section>
        <p>Sala/ habitacion</p>
      </section>
      <section className="bx_header">
        <i className="bx bxs-right-arrow-circle"></i>
      </section>
      <section>
        <p>sitio/hubicacion</p>
      </section>
      <section>
        <p>Tiempo llamado</p>
      </section>
    </div>
  );
};

export default Header;
