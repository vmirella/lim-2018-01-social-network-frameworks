import React from 'react';

class List extends React.Component {
  render() {
    return(
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active" id="home-menu">
          <a className="nav-link" href="home.html">Inicio
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item" id="profile-menu">
          <span id="my-posts" className="nav-link">Mi Perfil</span>
        </li>
        <li className="nav-item">
          <a id="logOut" className="nav-link" href="#">Salir</a>
        </li>
      </ul>
    );
    }
}

export default List;