import React from 'react';
import MenuResponsive from './MenuResponsive';
import List from '../components/List';
import Searcher from '../components/Searcher';

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
        <MenuResponsive/>

        <div className="navbar-collapse collapse" id="navbar-menu">
          <List />
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
            <Searcher/>
          </div>
        </div>
      </nav>
    );
  }  
}
export default Nav;
