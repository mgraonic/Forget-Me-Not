import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentLevel: '',
      items: []
    }
  }
  // grabs snapshot of DB on load
  // pulls levels out
  componentDidMount() {
    const levelsRef = firebase.database().ref('levels');
    levelsRef.on('value', (snapshot) => {
      let levels = snapshot.val();
      let newState = [];
      for (let level in levels) {
        newState.push({
          id: level,
          title: levels[level].title,
        });
      }
      this.setState({
        levels: newState
      });
    });
  }
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
