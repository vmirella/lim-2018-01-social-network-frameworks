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

const Login = () => {
  return (
    <div className="div-container">
      <div className="login-btn splits">
        <p>¿Ya tienes una cuenta?</p>
        <button className="active button" id="linkLogin">Ingresar</button>
      </div>
      <div className="rgstr-btn splits">
        <p>¿A&uacute;n no tienes cuenta?</p>
        <button className="button">Registrarse</button>
      </div>
      <div className="wrapper">

        <div id="login" className="col-xl-12 col-lg-12 col-md-12 col-sm-12 panel-login">
          <div className="logo">
            <span>
              <i className="fas fa-paw"></i>
            </span>
          </div>
          <h2 className="text-center social-name">SoyTuPata</h2>
          <form>
            <div className="form-group">
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Correo" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="password" placeholder="Contrase&ntilde;a" />
            </div>
            <button type="button" className="btn btn-success" id="button-login">Ingresar</button>
          </form>
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

        <div id="register" className="col-xl-12 col-lg-12 col-md-12 col-sm-12 panel-login">
          <div className="logo">
            <span>
              <i className="fas fa-paw"></i>
            </span>
          </div>
          <h2 className="text-center social-name">SoyTuPata</h2>
          <form>
            <div className="form-group">
              <input type="email" className="form-control" id="names" aria-describedby="emailHelp" placeholder="Nombres" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="lastnames" placeholder="Apellidos" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="emailRegister" placeholder="Correo" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="passRegister" placeholder="Contrase&ntilde;a" />
            </div>
            <button type="button" className="btn btn-success" id="buttonRegister">Registrar</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;