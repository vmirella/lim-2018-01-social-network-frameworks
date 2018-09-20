import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StartView from './components/StartView';
import Home from './components/Home';
// import 'firebase/database'
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyCrbUbq0oD49Yzk_eryDiJoseqOC6vUIcg",
    authDomain: "pet-health-social-network.firebaseapp.com",
    databaseURL: "https://pet-health-social-network.firebaseio.com",
    projectId: "pet-health-social-network",
    storageBucket: "pet-health-social-network.appspot.com",
    messagingSenderId: "838633128523"
});

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={StartView} exact />
          <Route path="/home" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;