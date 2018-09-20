import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StartView from './components/StartView';
import Home from './components/Home';
import firebase from 'firebase';
// import 'firebase/database'

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