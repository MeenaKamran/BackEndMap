var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var session = require('express-session');
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);
var request = require('request');

////Lets try to make a HTTP Post request
// request('http://localhost:8000/new/Epcot Center/Epcot Theme Park/-81.551598/28.3746987/Epcot.jpg', function(error, response, body)) {
// 	if (!error && response.statusCode == 200) {
// 		console.log(body); //show the HTML for the homepage
// 	}
// }


app.listen(8000, function(){
	console.log("listening on port 8000");
})
