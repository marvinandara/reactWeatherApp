var React = require('react');

var WeatherMessage = ({temp,location}) => {

  var locationArr = location.split(" ");

  for (var x = 0; x < locationArr.length; x++) {
    locationArr[x] = locationArr[x].charAt(0).toUpperCase() + locationArr[x].slice(1);
  }

  var newLocation = locationArr.join(" ");

  return (

    <p>Its {temp} in {newLocation}</p>

  );

}

module.exports = WeatherMessage;
