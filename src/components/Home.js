import React from 'react';
import firebase from 'firebase';
import '../Home.css';
import Nav from './Nav'
import LateralMenu from './LateralMenu';
import FormAddPost from './FormAddPost';
import PropTypes from 'prop-types';
import Post from './Post'

class Home extends React.Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const user = firebase.auth().currentUser;
    if (user) {
      firebase.database().ref('posts').on('value', (snapshot) => {
        const data = snapshot.val();
        const posts = Object.values(data);
        this.setState({ posts });
      });
    } else {
      this.context.router.history.push('/');
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container container-new-post">
          <div className="row justify-content-center div-center">
            <div className="col-md-7" id="container-to-post">
              <div className="row">
                <div id="dataPost" className="col-sm-12 div-form">
                  <FormAddPost />
                </div>
                <div id="showPost" className="col-sm-12 reverse">
                  {this.state.posts.map((post) => {
                    <Post />
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <LateralMenu />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;