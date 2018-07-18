import React, { Component } from 'react';
import { LineChart } from 'react-easy-chart';
import { AreaChart } from 'react-easy-chart';
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
        <p className="intro">
          Your plant's moisture level live!
        </p>
        <div className="linechart">
          <div className="moisture axis"><p>Moisture (%)</p></div>
          <div className="chart">
            <AreaChart
              style={{ '.label': { fill: 'black' } }}
              axes
              grid
              dataPoints
              verticalGrid
              noAreaGradient
              xType={'text'}
              tickTimeDisplayFormat={'%B %d'}
              yDomainRange={[0, 100]}
              width={400}
              height={400}
              interpolate={'cardinal'}
              xTicks={7}
              areaColors={['38726C']}
              data={[
                [
                  { x: 'Mon', y: 80 },
                  { x: 'Tues', y: 85 },
                  { x: 'Weds', y: 90 },
                  { x: 'Thurs', y: 75 },
                  { x: 'Fri', y: 78 },
                  { x: 'Sat', y: 82 },
                  { x: 'Sun', y: 87 }
                ]
              ]}
              />
          </div>
          <div className="day axis"><p>Day</p></div>
        </div>
      </div>
    );
  }
}

export default App;
