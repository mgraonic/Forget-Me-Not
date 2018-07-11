import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lastReading: '',
      allReadings: []
    }
  }

  // grabs snapshot of firebase DB on load
  // pulls levels out and sets state
  componentDidMount() {
    const levelsRef = firebase.database().ref('levels');
    levelsRef.on('value', (snapshot) => {
      console.log(new Date(snapshot.val()))
      let moistureLevels = snapshot.val();
      let levelData = [];

      for (let item in moistureLevels) {
console.log(moistureLevels[item].moisture);
        levelData.push({
          moisture: moistureLevels[item].moisture,
        });
      }

      this.setState({
        lastReading: levelData[levelData.length - 1],
        allReadings: levelData
      });
      console.log(this.state);
    });
// end of firebase listener
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
