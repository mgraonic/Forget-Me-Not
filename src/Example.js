const levelsRef = firebase.database().ref('levels');
levelsRef.on('value', (snapshot) => {
  let levels = snapshot.val();
  let refreshedLevels = [];

  for (let item in levels) {
    console.log(levels[item].moisture);
    refreshedLevels.push({
      moisture: levels[item].moisture
    });
  }

  this.setState({
    oldLevels: refreshedLevels
  });
});

componentDidMount() {
  const itemsRef = firebase.database().ref('items');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    let newState = [];
    for (let item in items) {
      newState.push({
        id: item,
        title: items[item].title,
        user: items[item].user
      });
    }
    this.setState({
      items: newState
    });
  });
}


<LineChart
  axes
  grid
  axisLabels={{x: 'Day', y: 'Moisture %'}}
  xType={'time'}
  yType={'text'}
  interpolate={'cardinal'}
  margin={{top: 0, right: 0, bottom: 30, left: 100}}
  width={100}
  height={100}
  data={this.state.allReadings}
   />
