import React from 'react';

class MenuResponsive extends React.Component {
  render() {
    return(
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>  
    );
  }  
}

export default MenuResponsive;
