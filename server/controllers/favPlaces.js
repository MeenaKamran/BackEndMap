var mongoose = require('mongoose');
var FavPlace = mongoose.model('favPlace');

module.exports = {
	getAll: function(req, res){
		FavPlace.find({}, function(err, results) {
			if (err) {
				console.log("error retrieving all locations ", err);
			} else {
				res.json(results);
			}
		})
	},

	create: function(req, res) {
		var location = new FavPlace({placeName: req.params.placeName, desc:req.params.desc, lng:req.params.lng, lat:req.params.lat, image: req.params.img})
		location.save(function (err) {
			if (err) {
				console.log("location was not saved ", err);
			} else {
				res.redirect('/');
			}
		})
	},

	update: function(req, res) {
		FavPlace.where('_id', req.params.id).update({$set:{placeName:req.params.placeName, desc:req.params.desc, lng:req.params.lng, lat:req.params.lat, image: req.params.img}}, function(err, result) {
			if (err) {
				console.log("couldn't find that location with that id to update ", err)
			} else {
				console.log("successfully updated the location: ", result);
				res.json(result);
			}
		})
	},

	remove: function(req, res) {
		FavPlace.remove({_id: req.params.id}, function(err, location) {
			if (err) {
				console.log("couldn't remove the location ", err);
			} else {
				console.log("location successfully removed ");
				res.redirect('/');
			}
		})
	}
}