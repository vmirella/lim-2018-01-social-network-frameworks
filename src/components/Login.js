import React from 'react';
import $ from 'jquery';
import '../Login.css';

$(document).ready(function () {
  $('.div-container .rgstr-btn button').click(function () {
    $('.div-container .wrapper').addClass('move');
    $('.body').css('background', '#35CD97');
    $('.div-container .login-btn button').removeClass('active');
    $(this).addClass('active');

  });
  $('.div-container .login-btn button').click(function () {
    $('.div-container .wrapper').removeClass('move');
    $('.body').css('background', '#009E66');
    $('.div-container .rgstr-btn button').removeClass('active');
    $(this).addClass('active');
  });
});

const Logo = () => {
  return (
    <div>
      <div className="logo">
        <span>
          <i className="fas fa-paw"></i>
        </span>
      </div>
      <h2 className="text-center social-name">SoyTuPata</h2>
    </div>
  )
}

class FormSignin extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <input type="text" className="form-control" name="name" placeholder="Nombres" value={this.state.name} onChange={this.handleOnChange} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="lastname" placeholder="Apellidos" value={this.state.lastname} onChange={this.handleOnChange} />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" name="email" placeholder="Correo" value={this.state.email} onChange={this.handleOnChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" placeholder="Contrase&ntilde;a" value={this.state.password} onChange={this.handleOnChange} />
        </div>
        <button className="btn btn-success" onSubmit={console.log(this)}>Registrar</button>
      </form>
    )
  }
}

class FormLogin extends React.Component {
  render() {
    return (
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
    )
  }
}

const Register = () => {
  return (
    <div id="register" className="col-12 panel-login">
      <Logo />
      <FormSignin />
    </div>
  )
}

const Log = () => {
  return (
    <div id="login" className="col-12 panel-login">
      <Logo />
      <FormLogin />
    </div>
  )
}

const Login = () => {
  return (
    <div className="div-container" >
      <div className="login-btn splits">
        <p>¿Ya tienes una cuenta?</p>
        <button className="active button" id="linkLogin">Ingresar</button>
      </div>
      <div className="rgstr-btn splits">
        <p>¿A&uacute;n no tienes cuenta?</p>
        <button className="button">Registrarse</button>
      </div>
      <div className="wrapper">
        <Log />
        <Register />
      </div>
    </div>
  )
};

export default Login;