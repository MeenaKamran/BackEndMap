var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
// instantiate the app
var app = express();
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());

// var routes_setter = require('./server/config/routes.js');
// // invoke the function stored in routes_setter and pass it the "app" variable
// routes_setter(app);
app.use(express.static(path.join(__dirname, '/client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
// set up a static file server that points to the "client" directory
var request = require('request');

////Lets try to make a HTTP Post request
request('https://localhost:8000/new/Epcot%20Center/Epcot%20Theme%20Park/-81.551598/28.3746987/Epcot.jpg', function(error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(response); //show the HTML for the homepage
	} else if (error) {
		console.log('there was an error: ', error);
	}
})


app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});