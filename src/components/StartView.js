import React from 'react';
import $ from 'jquery';
import '../Login.css';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';

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

const StartView = () => {
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
        <FormLogin />
        <FormRegister />
      </div>
    </div>
  )
};

export default StartView;