var React = require('react');


// var About = React.createClass({
//
//   render: function () {
//
//     return (
//
//       <h3>About Component</h3>
//
//     );
//
//   }
//
// });

var About = (props) => {

  return (

    <div>
      <h1 className = "text-center page-title">About</h1>
      <p>
        This weather application is built on <a href = "https://facebook.github.io/react/" target = "_blank">Reactjs</a>. It is part of a react course I am taking. Here is the link to the github repo <a href = "https://github.com/marvinandara/reactWeatherApp" target = "_blank">ReactWeatherApp</a>.
      </p>
      <p>
        Here are the tools used to make this application:
      </p>
      <ul>
        <li>
          <a href = "http://foundation.zurb.com/" target = "_blank">Foundation</a> - CSS Framework to give the application great styling as well as making it responsive.
        </li>
        <li>
          <a href = "http://openweathermap.org/" target = "_blank">OpenWeatherMap</a> - Api used to fetch weather conditions. In this app we use the city name query.
        </li>
      </ul>
    </div>

  )

};

module.exports = About;
