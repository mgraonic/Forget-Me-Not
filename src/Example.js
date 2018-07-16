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
  className="experiment"
  style={{ '.label': { fill: 'black' } }}
  axes
  grid
  xType={'time'}
  verticalGrid
  lineColors={['pink', 'cyan']}
  yDomainRange={[0, 100]}
  width={500}
  height={500}
  interpolate={'cardinal'}
  data={[
    [
      { x: '16-Jul-18', y: 80 },
      { x: '17-Jul-18', y: 85 },
      { x: '18-Jul-18', y: 90 },
      { x: '19-Jul-18', y: 75 },
      { x: '20-Jul-18', y: 78 },
      { x: '21-Jul-18', y: 82 }
    ]
  ]}
  />

  <!DOCTYPE html>
<html>
<body>

<p>Click the button to display todays day of the week.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function myFunction() {
    var d = new Date();
    var n = days[d.getDay()]
    document.getElementById("demo").innerHTML = n;
}
</script>

</body>
</html>
