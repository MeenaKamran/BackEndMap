var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var favPlaceSchema = new mongoose.Schema({
		placeName: {type: String},
		desc: {type: String},
		lng: {type: Number},
		lat: {type: Number},
		image: {data: Buffer, contentType: String}
}, {timestamps: true});
mongoose.model('favPlace', favPlaceSchema);