import React from 'react';

class FormAddPost extends React.Component {
  render() {
    return(
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
    );
  }  
}
export default FormAddPost;
