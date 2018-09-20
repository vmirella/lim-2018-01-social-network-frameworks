import React from 'react';
import * as data from '../data.js';

class FormLogin extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
    }    
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

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
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Correo" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Contrase&ntilde;a" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
            </div>
            <button type="submit" className="btn btn-success">Ingresar</button>
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
