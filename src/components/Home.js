import React from 'react';
import firebase from 'firebase';
import '../Home.css';
import Nav from './Nav'
import LateralMenu from './LateralMenu';
import FormAddPost from './FormAddPost';
import PropTypes from 'prop-types';

class Home extends React.Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let user = firebase.auth().currentUser;
    if(user) {
      firebase.database().ref('posts').on('value', (snapshot) => {
        let data = snapshot.val();
        let posts = Object.values(data);
        this.setState({posts});
      });
    } else {
      this.context.router.history.push('/');
    }
  }

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
                  {this.state.posts.map((post) => {
                    return (
                      <div className = "{post.id} post panel-login">
                        <div className="row">
                          <div className="col-10">
                            <h5 className="card-title">{post.title}</h5>
                          </div>
                        </div>
                        <span className="category"><i className="far fa-folder-open"></i> {post.category}</span>
                        <span className="date"><i className="far fa-calendar-alt"></i> </span>
                        <hr/>
                        <img className="card-img-top" src="http://images.estampas.com/2012/07/01/mascotas.jpg.525.0.thumb" width="40" height="350" />
                        <p className="card-text">{post.content}</p>     
                        <div className = "buttonSel">
                          <button className = "{post.id} btn btn-light col-sm-3" id="coment"><i className="far fa-comment-alt"></i> Comentar</button>
                          <button className = "{post.id} btn btn-light col-sm-3" id="like"><i className="far fa-thumbs-up"></i> Me gusta <span id="badge-{post.id}" className="badge badge-success">${post.likes}</span></button>
                        </div>
                      </div>
                    )
                  })}
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