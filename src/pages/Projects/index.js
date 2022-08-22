import React from "react";
import "./style.css";
import NavBar from "../../components/navBar";
import ChurrasApp from "../../assets/Projects/churras-app/img-home.jpeg";
import FrontendTCC from "../../assets/Projects/frontend-tcc/x.png";

const Projects = () => {
  return (
    <>
      <NavBar />
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div className="cardProjects">
              <h1 className="contentProjects">Churras App</h1>
              <h1 className="contentProjects">
                App elaborado para mobile usando React Native como biblioteca
                javascript para elaboração do projeto.
              </h1>
              <h1 className="contentProjects">
                Este foi um projeto acadêmico realizado em grupo pela rede
                Senai, no qual o desafio era realizar a elaboração do nosso
                primeiro aplicativo para mobile.
              </h1>
              <h1 className="contentProjects">
                Basicamente sua função é realizar o cálculo com base nas
                informações descritas para o cálculo, sendo o resultado a
                quantidade média do que será preciso de cada item descrito.
              </h1>
              <h1 className="contentProjects">Mais informações:</h1>
              <button className="linkProjects">
                <a
                  href="https://github.com/VitorBsdc/churras_calculator"
                  target="_blank"
                  rel="link-1"
                >
                  Repositório Git Hub
                </a>
              </button>
              <button className="linkProjects">
                <a
                  href="https://www.linkedin.com/posts/vitor-benedito_reactnative-desenvolvimento-trabalho-activity-6922333015712890881-0VVS?utm_source=linkedin_share&utm_medium=member_desktop_web"
                  target="_blank"
                  rel="link-2"
                >
                  Publicação Linkedin
                </a>
              </button>
            </div>
          </div>
          <div class="col-lg-4 imgAlign">
            <img className="imgProjects" src={ChurrasApp} alt="img-home" />
          </div>
          <div class="col-lg-6">
            <div className="cardProjects">
              <h1 className="contentProjects">Front-end TCC</h1>
              <h1 className="contentProjects">
                Site elaborado utilizando como tecnologia principal para
                realização do frontend a biblioteca javascript React JS.
              </h1>
              <h1 className="contentProjects">
                Sendo este o TCC da turma, o objetivo final era construir um
                dashboard que fosse capaz de administrar dados de máquinas
                industriais presentes nas dependências do Senai.
              </h1>
              <h1 className="contentProjects">
                Neste projeto fiz parte da equipe responsável pelo Front-end,
                onde colaborei com designers além de codificar alguns dos
                elementos do site junto a minha equipe.
              </h1>
              <h1 className="contentProjects">Mais informações:</h1>
              <button className="linkProjects">
                <a
                  href="https://github.com/VitorBsdc/frontend_tcc_senai"
                  target="_blank"
                  rel="link-3"
                >
                  Repositório Git Hub
                </a>
              </button>
              <button className="linkProjects">
                <a
                  href="https://www.linkedin.com/posts/vitor-benedito_desenvolvimento-formado-tcc-activity-6941494312039792640-kups?utm_source=linkedin_share&utm_medium=member_desktop_web"
                  target="_blank"
                  rel="link-4"
                >
                  Publicação Linkedin
                </a>
              </button>
            </div>
          </div>
          <div class="col-lg-4 imgAlign">
            <img className="imgProjects" src={FrontendTCC} alt="img-login" />
            <h1 className="legendProjects">Sem acesso a imagens do projeto</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
