var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location:undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {

      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
        this.handleSearch(location);
        window.location.hash = '#/';
    }

  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
        this.handleSearch(location);
        window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;
    // var imgURL = "";
    // setBackgroundImage();
    //
    // function setBackgroundImage () {
    //
    //   if(weatherID > 199 && weatherID < 233){
    //
    //     img = "http://res.cloudinary.com/dr9sypj5b/image/upload/v1463288058/thunderstorm_ateexc.jpg";
    //
    //   }
    //   else if(weatherID > 299 && weatherID < 322){
    //
    //     img = "http://res.cloudinary.com/dr9sypj5b/image/upload/v1463288056/drizzle_u0snu7.jpg";
    //
    //   }
    //   else if(weatherID > 499 && weatherID < 532){
    //
    //     img = "http://res.cloudinary.com/dr9sypj5b/image/upload/v1463288056/rainy_wyiva0.jpg";
    //
    //   }
    //   else if(weatherID > 599 && weatherID < 623){
    //
    //     img = "http://res.cloudinary.com/dr9sypj5b/image/upload/v1463288056/snow_qifb4n.jpg";
    //
    //   }
    //   else if(weatherID > 700 && weatherID < 782){
    //
    //     img = "http://res.cloudinary.com/dr9sypj5b/image/upload/v1463288060/atmosphere_m6acps.jpg";
    //
    //   }
    //   else if(weatherID === 800){
    //
    //     img = "http://res.cloudinary.com/dr9sypj5b/image/upload/v1463288056/clearsky_ca7g8v.jpg";
    //
    //   }
    //   else if(weatherID > 800 && weatherID < 805){
    //
    //     img = "http://res.cloudinary.com/dr9sypj5b/image/upload/v1463288056/cloudy_yull12.jpg";
    //
    //   }
    //   else if(weatherID > 899 && weatherID < 907){
    //     img = "http://res.cloudinary.com/dr9sypj5b/image/upload/v1463288544/extreme_kjh2rm.jpg";
    //     alert("Extreme weather conditions. Please check the news and be safe!")
    //   }
    //   else if(weatherID > 950 && weatherID < 963){
    //
    //     img = "http://res.cloudinary.com/dr9sypj5b/image/upload/v1463288748/plus_wjhh9m.png";
    //
    //   }
    //
    //   imgUrl = img;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message = {errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
