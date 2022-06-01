import React from "react";
import "./style.css";
import NavBar from "../../components/navBar";
import Javascript from "../../assets/Studies/icon-javascript-96.png";
import Html from "../../assets/Studies/icon-html5-96.png";
import Css from "../../assets/Studies/icon-css3-96.png";
import Git from "../../assets/Studies/icon-git-96.png";
import Reactjs from "../../assets/Studies/icon-react-96.png";
import Bootstrap from "../../assets/Studies/icon-bootstrap-96.png";
import Mysql from "../../assets/Studies/icon-mysql-96.png";
import Mongodb from "../../assets/Studies/icon-mongodb-96.png";
import Frontend from "../../assets/Studies/icon-front-end-96.png";

const Studies = () => {
  return (
    <>
      <NavBar />
      <div class="boxStudies p-3">
        <h1 className="font-monospace fs-4">
          Abaixo são algumas das principais "Hard Skills" adquiridas por meio do
          curso "Técnico em Desenvolvimento de Sistemas", na Escola Senai
          Suíço-Brasileira Paulo Ernesto Tolle.
        </h1>
      </div>

      <div class="container-sm">
        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          <div className="col">
            <div class="card mb-3">
              <div class="col-md-4">
                <img
                  src={Javascript}
                  class="img-fluid rounded-start"
                  alt="study-2"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center font-monospace">
                    Javascript
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3">
              <div class="col-md-4">
                <img src={Html} class="img-fluid rounded-start" alt="study-2" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center font-monospace">HTML5</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3">
              <div class="col-md-4">
                <img src={Css} class="img-fluid rounded-start" alt="study-3" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center font-monospace">CSS3</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3">
              <div class="col-md-4">
                <img src={Git} class="img-fluid rounded-start" alt="study-4" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center font-monospace">GIT</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3">
              <div class="col-md-4">
                <img
                  src={Reactjs}
                  class="img-fluid rounded-start"
                  alt="study-5"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center font-monospace">React</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3">
              <div class="col-md-4">
                <img
                  src={Bootstrap}
                  class="img-fluid rounded-start"
                  alt="study-6"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center font-monospace">
                    Bootstrap
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3">
              <div class="col-md-4">
                <img
                  src={Mysql}
                  class="img-fluid rounded-start"
                  alt="study-7"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center font-monospace">My SQL</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3">
              <div class="col-md-4">
                <img
                  src={Mongodb}
                  class="img-fluid rounded-start"
                  alt="study-8"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center font-monospace">
                    Mongo DB
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-3">
              <div class="col-md-4">
                <img
                  src={Frontend}
                  class="img-fluid rounded-start"
                  alt="study-8"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center font-monospace">
                    Front end
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studies;
