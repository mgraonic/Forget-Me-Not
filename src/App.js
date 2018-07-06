import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Forget Me Not</h1>
        </header>
        <p className="Intro">
          View your plant's moisture level live!
        </p>
      </div>
    );
  }
}

export default App;
