var favPlace = require('./../controllers/favPlaces.js');
module.exports = function(app) {

	app.get("/", function(req, res){
		favPlace.getAll(req, res);
	});

	app.post("/new/:placeName/:desc/:lng/:lat/:img", function(req, res){
		console.log("req.params.placeName is: ", req.params.placeName);
		console.log("req.params.desc: ", req.params.desc);
		console.log("req.params.lng: ", req.params.lng);
		console.log("req.params.lat: ", req.params.lat);
		favPlace.create(req, res);
	});

	app.post("/update/:id/:placeName/:desc/:lng/:lat/:img", function(req, res){
		favPlace.update(req, res);
	});

	app.post("/remove/:id", function(req, res){
		favPlace.remove(req, res);
	});
}