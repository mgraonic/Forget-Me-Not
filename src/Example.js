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
