import React from 'react';

const lateralMenu = () => {
  return(
    <div className="lateral-menu">
      <h5 className="d-none d-sm-none d-md-block d-lg-block d-xl-block">Categorías</h5>
      <button className="btn btn-success d-block d-sm-block d-md-none d-lg-none d-xl-none float-right" id="show-categories">Categorías</button>
      <ul id="buttons-category" className="list-group custom-list">
        <li className="category-salud list-group-item" value="Salud">
          <a href="#">Salud</a>
        </li>
        <li className="category-alimentacion list-group-item" value="Alimentación">
          <a href="#">Alimentación</a>
        </li>
        <li className="category-adopcion list-group-item" value="Adopción">
          <a href="#">Adopción</a>
        </li>
        <li className="category-mascotas-perdidas list-group-item" value="Mascotas pérdidas">
          <a href="#">Mascotas pérdidas</a>
        </li>
        <li className="category-sos list-group-item" value="SOS">
          <a href="#">SOS</a>
        </li>
        <li className="category-entretenimiento list-group-item" value="Entretenimiento">
          <a href="#">Entretenimiento</a>
        </li>
      </ul>
    </div>
  );
}

export default lateralMenu;
