var React = require('react');

var WeatherMessage = ({temp,location}) => {

  var newLocation = location.charAt(0).toUpperCase() + location.slice(1);

  return (

    <p>Its {temp} in {newLocation}</p>

  );

}

module.exports = WeatherMessage;
