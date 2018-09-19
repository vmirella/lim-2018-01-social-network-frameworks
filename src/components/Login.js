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

const Input = ({ type, id, text }) => {
  return (
    <div className="form-group">
      <input type={type} className="form-control" id={id} placeholder={text} />
    </div>
  )
}

const Button = ({text}) => {
  return (
    <button className="btn btn-success" id="buttonRegister">{text}</button>
  )
}

const Signin = () => {
  return (
    <form>
      <Input type="text" id="names" text="Nombres" />
      <Input type="text" id="lastNames" text="Apellidos" />
      <Input type="email" id="emailRegister" text="Correo" />
      <Input type="password" id="passRegister" text="Contrase&ntilde;a" />
      <Button text="Registrar" />
    </form>
  )
}

/* const Login = () => {
  return (
    <form>
      <Input type="email" id="email" text="Correo" />
      <Input type="password" id="password" text="Contrase&ntilde;a" />
      <Button text="Ingresar" />
    </form>
  )
} */

const ButtonFG = ({ }) => {

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

        <div id="login" className="col-12 panel-login">
          <Logo />
          <Login />
          <p className="lines">O</p>
          <div id="eventLogin">
            <button type="button" className="btn btn-primary button-facebook" id="loginFacebook">
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>Ingresar con facebook</button>
            <button type="button" className="btn btn-danger button-google" id="loginGoogle">
              <span>
                <i className="fab fa-google"></i>
              </span>Ingresar con google</button>
          </div>
        </div>

        <div id="register" className="col-12 panel-login">
          <Logo />
          <Signin />
        </div>

      </div>
    </div>
  )
};

export default Login;