import React from "react";
import NavBar from "../../components/navBar";
import "./style.css";
import Instagram from "../../assets/Contact/icon-instagram-48.png";
import Linkedin from "../../assets/Contact/icon-linkedin-48.png";
import Github from "../../assets/Contact/icon-github-48.png";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h1 class="text-center">Contato</h1>
                <form id="form-contato">
                  <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input
                      class="form-control"
                      type="text"
                      name="nome"
                      id="nome"
                      placeholder="Digite o seu nome..."
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Digite o seu e-mail..."
                    />
                  </div>
                  <div class="form-group">
                    <label for="mensagem">Mensagem:</label>
                    <textarea
                      class="form-control"
                      name="mensagem"
                      id="mensagem"
                      placeholder="Digite a mensagem..."
                    ></textarea>
                  </div>
                  <br />
                  <div class="form-group text-center">
                    <button type="submit" class="btn btn-success">
                      ENVIAR
                    </button>
                  </div>
                  <div class="alert alert-danger d-none">
                    Preencha o campo <span id="campo-erro"></span>!
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div className="row align-items-center">
              <iframe
                title="mapa-região"
                class="mapsContact"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7307.99250051306!2d-46.75020930662962!3d-23.676092088202143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5189a2638035%3A0xd38d134b6566c66c!2sPiraporinha%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1653333130013!5m2!1spt-BR!2sbr"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div class="boxContact">
        <a href="https://instagram.com/vitor_bsdc">
          <img src={Instagram} alt="icon-instagram" />
        </a>
        <a href="https://www.linkedin.com/in/vitor-benedito">
          <img src={Linkedin} alt="icon-linkedin" />
        </a>
        <a href="https://github.com/vitorbsdc">
          <img src={Github} alt="icon-github" />
        </a>
      </div>
    </>
  );
};

export default Contact;
