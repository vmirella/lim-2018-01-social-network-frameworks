import React from 'react';
import '../Home.css';
import Nav from './Nav'
import LateralMenu from './LateralMenu';
import FormAddPost from './FormAddPost';
class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="container container-new-post">
          <div className="row justify-content-center div-center">
            <div className="col-md-7" id="container-to-post">
              <div className="row">
                <div id="dataPost" className="col-sm-12 div-form">
                  <FormAddPost/>
                </div>
                <div id="showPost" className="col-sm-12 reverse">
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <LateralMenu/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;