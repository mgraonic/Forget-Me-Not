import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentLevel: '',
      oldLevels: []
    }
  }

  // grabs snapshot of DB on load
  // pulls levels out and sets state
  componentDidMount() {
    const levelsRef = firebase.database().ref('levels');
    levelsRef.on('value', (snapshot) => {
      let moistureLevels = snapshot.val();
      console.log(moistureLevels);

      let levelData = [];

      for (let level in moistureLevels) {
        levelData.push({
          moisture: moistureLevels[level].moisture,
        });
      }


      this.setState({
        oldLevels: levelData
      });
    });
    console.log(this.state);
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
