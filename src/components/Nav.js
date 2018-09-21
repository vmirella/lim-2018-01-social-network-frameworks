import React from 'react';
import firebase from 'firebase';
import Menu from './Menu';
import Searcher from './Searcher';
import PropTypes from 'prop-types';

class Nav extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    firebase.auth().signOut();
    localStorage.removeItem('email');
    this.context.router.history.push('/');
  }
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-light">
        <div>
          <span className="logo-home">
            <i className="fas fa-paw"></i>
          </span>
          <span className="navbar-brand">SoyTuPata</span>
        </div>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> 

        <div className="navbar-collapse collapse" id="navbar-menu">
          <Menu/>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
            <Searcher/>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
            <div className="btn-group">
              <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user-circle"></i> {localStorage.getItem('email')}
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" id="log-out" href="#" onClick={this.logout}>Salir</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }  
}
export default Nav;
