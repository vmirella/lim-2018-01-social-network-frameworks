import React from 'react';
import LogoHome from '../components/LogoHome';
import List from '../components/List';
import Searcher from '../components/Searcher';

const nav = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-light">
      <LogoHome />
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbar-menu">
        <List />
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
          <Searcher/>
        </div>
      </div>
    </nav>
  );
}
export default nav;
