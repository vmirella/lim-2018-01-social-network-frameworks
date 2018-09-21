import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

class FormLogin extends React.Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    //this.handleEmailChange = this.handleEmailChange.bind(this);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick(e) {
    let provider = null;
    e.target.id === 'facebook'
      ? provider = new firebase.auth.FacebookAuthProvider()
      : provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        this.context.router.history.push('/home');
        const user = result.user;
        firebase.database().ref('users/' + user.uid).set({
          username: user.displayName,
          email: user.email,
          picture: user.photoURL
        });
      })
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
        const errorCode = error.code;
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
              <input type="email" className="form-control" placeholder="Correo" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Contrase&ntilde;a" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-success">Ingresar</button>
          </form>
          <p className="lines">O</p>
          <div>
            <button type="button" className="btn btn-primary button-facebook" onClick={this.handleClick} id="facebook" >
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>Ingresar con facebook</button>
            <button type="button" className="btn btn-danger button-google" onClick={this.handleClick} >
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
