import React, { Component } from 'react';
import { LineChart } from 'react-easy-chart';
import './App.css';
import firebase from './firebase.js';
import moment from 'moment-timezone';


class App extends Component {
  constructor(){
    super();
    this.state = {
      lastReading: '',
      allReadings: []
    }
  }
  // FIREBASE LISTENER
  // grabs snapshot of firebase DB on load
  // pulls levels out and sets state
  componentDidMount() {
    const levelsRef = firebase.database().ref('levels');
    levelsRef.on('value', (snapshot) => {
      let readings = snapshot.val();
      let newReadings = [];

      for (let item in readings) {
        let t = readings[item].utc_time;
        let newt = moment(t, 'YYYY-MM-DD HH:mm:ssZZ').format('DD-MMM-YY')
        newReadings.push({
          utcTime: newt,
          moisture: readings[item].moisture
        });
      }

      this.setState({
        lastReading:newReadings[newReadings.length - 1],
        allReadings:newReadings
      });

      let recent = this.state.lastReading.utcTime;
      console.log(moment(recent, 'YYYY-MM-DD HH:mm:ssZZ').tz('America/Los_Angeles').format('ha z'));
      console.log(moment(recent, 'YYYY-MM-DD HH:mm:ssZZ').format('DD-MMM-YY'));

      console.log(this.state);
    });
  }
  // DATES

  // DATA CONSTRUCTION

  render() {
    const d = this.state.allReadings.map((reading) => {
      return {x: reading.utcTime, y: reading.moisture}
    })

    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Forget Me Not</h1>
        </header>
        <p className="Intro">
          View your plant's moisture level live!
        </p>
        <div className="linechart">
          <LineChart
            className="experiment"
            axisLabels={{x: 'Day', y: 'Moisture %'}}
            margin={{top: 0, right: 0, bottom: 30, left: 100}}
            axes
            grid
            verticalGrid
            lineColors={['pink', 'cyan']}
            yDomainRange={[0, 100]}
            margin={{top: 0, right: 0, bottom: 100, left: 100}}
            width={500}
            height={500}
            interpolate={'cardinal'}
            data={[
              [
                { x: 10, y: 25 },
                { x: 20, y: 10 },
                { x: 30, y: 25 },
                { x: 40, y: 10 },
                { x: 50, y: 12 },
                { x: 60, y: 25 }
              ], [
                { x: 10, y: 40 },
                { x: 20, y: 30 },
                { x: 30, y: 25 },
                { x: 40, y: 60 },
                { x: 50, y: 22 },
                { x: 60, y: 9 }
              ]
            ]}
            />
        </div>
      </div>
    );
  }
}

export default App;
