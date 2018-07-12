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
      let readings = snapshot.val();
      let newReadings = [];

      for (let item in readings) {
console.log(readings[item].moisture);
       newReadings.push({
          moisture: readings[item].moisture,
          utcTime: readings[item].utc_time
        });
      }

      this.setState({
        lastReading:newReadings[newReadings.length - 1],
        allReadings:newReadings
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
