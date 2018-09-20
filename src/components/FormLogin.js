import React from 'react';

class FormLogin extends React.Component {
  render() {
    return (
      <div id="login" className="col-12 panel-login">
        <div className="logo">
          <span>
            <i className="fas fa-paw"></i>
          </span>
        </div>
        <h2 className="text-center social-name">SoyTuPata</h2>
        <div>
          <form>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Correo" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Contrase&ntilde;a" />
            </div>
            <button className="btn btn-success">Ingresar</button>
          </form>
          <p className="lines">O</p>
          <div>
            <button type="button" className="btn btn-primary button-facebook">
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>Ingresar con facebook</button>
            <button type="button" className="btn btn-danger button-google">
              <span>
                <i className="fab fa-google"></i>
              </span>Ingresar con google</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FormLogin;
