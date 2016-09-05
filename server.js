var express = require('express');


//create our app
var app = express();

app.use(express.static('public'));

app.listen(6069, function () {

  console.log('Express server is up on port 6069');

});
