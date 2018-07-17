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

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@yusufevli?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Yusuf Evli"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Yusuf Evli</span></a>
