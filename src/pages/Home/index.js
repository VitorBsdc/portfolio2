import React from "react";
import NavBar from "../../components/navBar";
import "./style.css";
import Profile from "../../assets/Home/profile-me.png";

const Home = () => {
  return (
    <>
      <NavBar />
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div className="cardHome">
              <h1 className="contentHome">"nome": Vitor Benedito</h1>
              <h1 className="contentHome">"localidade": São Paulo - SP</h1>
              <h1 className="contentHome">"idade": 17 anos</h1>
              <h1 className="contentHome">"email": vitor.bsdc@gmail.com</h1>
              <h1 className="contentHome">"formação": Desenv. de Sistemas</h1>
            </div>
          </div>
          <div class="col-lg-4">
              <img className="imgHome" src={Profile} alt="profile-me" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
