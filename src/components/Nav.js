import React from 'react';
import Menu from './Menu';
import Searcher from './Searcher';

class Nav extends React.Component {
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
          {localStorage.getItem('email')}
          </div>
        </div>
      </nav>
    );
  }  
}
export default Nav;
