import React from 'react';
import firebase from 'firebase';

class Menu extends React.Component {

  constructor() {
    super();
  }
  
  render() {
    return(
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active" id="home-menu">
          <a className="nav-link" href="home.html">Inicio
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item" id="profile-menu">
          <span id="my-posts" className="nav-link">Mis publicaciones</span>
        </li>
      </ul>
    );
    }
}

export default Menu;