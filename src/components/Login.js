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
    <div class="div-container">
      <div class="login-btn splits">
        <p>¿Ya tienes una cuenta?</p>
        <button class="active button" id="linkLogin">Ingresar</button>
      </div>
      <div class="rgstr-btn splits">
        <p>¿A&uacute;n no tienes cuenta?</p>
        <button class="button">Registrarse</button>
      </div>
      <div class="wrapper">

        <div id="login" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 panel-login">
          <div class="logo">
            <span>
              <i class="fas fa-paw"></i>
            </span>
          </div>
          <h2 class="text-center social-name">SoyTuPata</h2>
          <form>
            <div class="form-group">
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Correo" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="password" placeholder="Contrase&ntilde;a" />
            </div>
            <button type="button" class="btn btn-success" id="button-login">Ingresar</button>
          </form>
          <p class="lines">O</p>
          <div id="eventLogin">
            <button type="button" class="btn btn-primary button-facebook" id="loginFacebook">
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>Ingresar con facebook</button>
            <button type="button" class="btn btn-danger button-google" id="loginGoogle">
              <span>
                <i class="fab fa-google"></i>
              </span>Ingresar con google</button>
          </div>
        </div>

        <div id="register" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 panel-login">
          <div class="logo">
            <span>
              <i class="fas fa-paw"></i>
            </span>
          </div>
          <h2 class="text-center social-name">SoyTuPata</h2>
          <form>
            <div class="form-group">
              <input type="email" class="form-control" id="names" aria-describedby="emailHelp" placeholder="Nombres" />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="lastnames" placeholder="Apellidos" />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="emailRegister" placeholder="Correo" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="passRegister" placeholder="Contrase&ntilde;a" />
            </div>
            <button type="button" class="btn btn-success" id="buttonRegister">Registrar</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;