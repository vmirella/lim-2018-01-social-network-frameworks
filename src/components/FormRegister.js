import React from 'react';
import firebase from 'firebase'

class FormRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      picture: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAuth = this.handleAuth.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      username: `${e.target.children[0].children[0].value} ${e.target.children[1].children[0].value}`,
      email: e.target.children[2].children[0].value,
      password: e.target.children[3].children[0].value,
      picture: 'http://images.estampas.com/2012/07/01/mascotas.jpg.525.0.thumb'
    })
    console.log(this.state)
  }

  handleAuth() {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('El usuario ha sido creado con cuenta de email y password', result)
        // cb(null, result)
      })
      .catch((error) => {
        console.log('Ha habido un error')
        console.log(error)
        // cb(error)

      });
  }

  render() {
    return (
      <div id="register" className="col-12 panel-login">
        <div className="logo">
          <span>
            <i className="fas fa-paw"></i>
          </span>
        </div>
        <h2 className="text-center social-name">SoyTuPata</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" name="name" placeholder="Nombres" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="lastname" placeholder="Apellidos" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" placeholder="Correo" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Contrase&ntilde;a" />
          </div>
          <button className="btn btn-success">Registrar</button>
        </form>
      </div>
    )
  }
}

export default FormRegister;
