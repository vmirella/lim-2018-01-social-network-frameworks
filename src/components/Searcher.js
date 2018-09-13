import React from 'react';

class Searcher extends React.Component {
  render() {
    return(
      <div className="input-group">
        <input type="text" id="input-element" className="form-control" placeholder="Buscar" />
        <span className="input-group-btn">
          <button className="btn btn-light" id="search-button" type="button">
            <img src="../search.png" alt="" className="search-img" />
          </button>
          <button className="btn btn-light" id="search-button-post" type="button">
            <img src="../search.png" alt="" className="search-img" />
          </button>
        </span>
      </div>
    );
  }
}

export default Searcher;
