import React from 'react';
import firebase from 'firebase'

class FormRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      lastname: null,
      username: '',
      email: '',
      password: '',
      picture: 'http://images.estampas.com/2012/07/01/mascotas.jpg.525.0.thumb'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password, username, picture } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('El usuario ha sido creado con cuenta de email y password', result)
        // cb(null, result)
        firebase.database().ref('users/' + result.user.uid).set({
          username,
          email,
          picture
        }, (error) => {
          console.log(error);
          console.log('error');
        });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          window.alert('El correo ya se encuentra registrado.');
        }
        else if (error.code === 'auth/weak-password') {
          window.alert('La contraseña es demasiado debil.');
        }
        else if (error.code === 'auth/invalid-email') {
          window.alert('El correo es invalido.');
        }
        else {
          window.alert('El usuario no se ha podido registrar');
        }

      });
    console.log(this.state)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    if (this.state.name && this.state.lastname) {
      this.setState({
        username: `${this.state.name} ${this.state.lastname}`
      })
    }
  }

  // componentDidMount() {
  //  const { email, password } = this.state;
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       console.log('El usuario ha sido creado con cuenta de email y password', result)
  //       // cb(null, result)
  //     })
  //     .catch((error) => {
  //       console.log('Ha habido un error')
  //       console.log(error)
  //       // cb(error)

  //     });
  // }

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
            <input type="text" className="form-control" name="name" placeholder="Nombres" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="lastname" placeholder="Apellidos" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" placeholder="Correo" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Contrase&ntilde;a" onChange={this.handleChange} />
          </div>
          <button className="btn btn-success">Registrar</button>
        </form>
      </div>
    )
  }
}

export default FormRegister;
