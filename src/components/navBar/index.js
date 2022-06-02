import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <>
      <header>
        <div className="navBar">
          <Link to="/">INÍCIO</Link>
          <Link to="/me">ME</Link>
          <Link to="/projects">PROJETOS</Link>
          <Link to="/studies">ESTUDOS</Link>
          <Link to="/contact">CONTATO</Link>
        </div>
      </header>
    </>
  );
};

export default NavBar;
