import React from "react";
import "./style.css";
import NavBar from "../../components/navBar";
import Profile from "../../assets/Home/profile-me.png";

const Me = () => {
  return (
    <>
      <NavBar />
      <div class="container">
        <div class="row">
          <div class="col-lg-4 imgAlign">
            <img className="imgMe" src={Profile} alt="profile-me" />
          </div>
          <div class="col-lg-6">
            <div className="cardMe">
              <h1 className="contentMe">
                Em 2021 iniciei os estudos na área da programação após ser
                aprovado no processo seletivo da rede SENAI. Atualmente tenho
                como objetivo meu primeiro emprego na área.
              </h1>
              <h1 className="contentMe">
                Tenho pretensões futuras de entrar no Exército Brasileiro e
                seguir evoluindo na área da programação, mais especificamente no
                Front-End.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Me;
