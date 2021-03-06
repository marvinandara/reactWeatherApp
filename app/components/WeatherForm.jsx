var React = require('react');


var WeatherForm = React.createClass({

  onFormSubmit: function (e) {

    e.preventDefault();

    var cityName = this.refs.cityName.value;

    if (cityName.length > 0) {

      this.refs.cityName.value = "";
      this.props.onSearch(cityName);

    }

  },

  render: function () {

    return (

      <form onSubmit = {this.onFormSubmit}>
        <div>
          <input type = "search" ref = "cityName" placeholder = "Enter city name"/>
        </div>
        <div>
          <button className = "button expanded hollow">Get Weather</button>
        </div>
      </form>

    );

  }

});

module.exports = WeatherForm;
