import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

class FormLogin extends React.Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleEmailChange = this.handleEmailChange.bind(this);
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

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((result) => {
      console.log('Ha logrado abrir sesión con éxito', result);
      localStorage.setItem('email', this.state.email);
      this.context.router.history.push('/home');
    })
    .catch((error) => {
      console.log('Ha habido un error', error);
      let errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        window.alert('Contraseña incorrecta.');
      }
      else {
        window.alert('Usuario no esta registrado.');
      }
    })
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
