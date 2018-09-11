import React from 'react';
import '../Home.css';

const Home = () => {
  //document.body.style.backgroundColor = '#F6F6F6';
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-md navbar-light">
        <span className="logo-home">
          <i className="fas fa-paw"></i>
        </span>
        <span className="navbar-brand">SoyTuPata</span>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbar-menu">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" id="home-menu">
              <a className="nav-link" href="home.html">Inicio
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item" id="profile-menu">
              <span id="my-posts" className="nav-link">Mi Perfil</span>
            </li>
            <li className="nav-item">
              <a id="logOut" className="nav-link" href="#">Salir</a>
            </li>
          </ul>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
            <div className="input-group">
              <input type="text" id="input-element" className="form-control" placeholder="Buscar" />
              <span className="input-group-btn">
                <button className="btn btn-light" id="search-button" type="button">
                  <img src="img/search.png" alt="" className="search-img" />
                </button>
                <button className="btn btn-light" id="search-button-post" type="button">
                  <img src="../img/search.png" alt="" className="search-img" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="container container-new-post">
        <div className="row justify-content-center div-center">

          <div className="col-md-7" id="container-to-post">
            <div className="row">
              <div id="dataPost" className="col-sm-12 div-form">
                <div className="post form-add-post">
                  <a href="" id="close-create" className="close hidden">
                    <i className="fas fa-window-close"></i>
                  </a>
                  <input type="text" id="inputTitle" className="form-control" placeholder="¿Qué  tema quieres compartir?" />

                  <div id="hidden-form" className="hidden">
                    <div>
                      <div id="contentImagen"></div>
                    </div>
                    <br/>
                    <textarea id="inputContent" className="form-control" aria-label="With textarea" placeholder="Ingresa el contenido" rows="5"></textarea>
                    <br/>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group row">
                          <label htmlFor="opt-category" className="col-sm-3 col-form-label font-weight-bold">Categoría</label>
                          <div className="col-sm-9">
                            <select id="opt-category" className="custom-select form-control">
                              <option value="Salud">Salud</option>
                              <option value="Alimentación">Alimentación</option>
                              <option value="Adopción">Adopción</option>
                              <option value="Mascotas pérdidas">Mascotas pérdidas</option>
                              <option value="SOS">SOS</option>
                              <option value="Entretenimiento">Entretenimiento</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group row">
                          <label htmlFor="optState" className="col-sm-3 col-form-label font-weight-bold">Estado</label>
                          <div className="col-sm-9">
                            <select id="optState" className="custom-select form-control">
                              <option value="publico">Público</option>
                              <option value="privado">Privado</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button id="addPost" className="btn btn-success btn-form-color">Publicar</button>
                    <button id="editPost" className="btn btn-success btn-form-color">Actualizar</button>
                  </div>
                </div>
              </div>
              <div id="showPost" className="col-sm-12 reverse">
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="lateral-menu">
              <h5 className="d-none d-sm-none d-md-block d-lg-block d-xl-block">Categorías</h5>
              <button className="btn btn-success d-block d-sm-block d-md-none d-lg-none d-xl-none float-right" id="show-categories">Categorías</button>
              <ul id="buttons-category" className="list-group custom-list">
                <li className="category-salud list-group-item" value="Salud">
                  <a href="#">Salud</a>
                </li>
                <li className="category-alimentacion list-group-item" value="Alimentación">
                  <a href="#">Alimentación</a>
                </li>
                <li className="category-adopcion list-group-item" value="Adopción">
                  <a href="#">Adopción</a>
                </li>
                <li className="category-mascotas-perdidas list-group-item" value="Mascotas pérdidas">
                  <a href="#">Mascotas pérdidas</a>
                </li>
                <li className="category-sos list-group-item" value="SOS">
                  <a href="#">SOS</a>
                </li>
                <li className="category-entretenimiento list-group-item" value="Entretenimiento">
                  <a href="#">Entretenimiento</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Home;