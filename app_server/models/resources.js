var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
	comment:String,
	rating:{type:Number, required:true, min: 0, max: 5},
	user:String,
	createdOn: {type: Date, "default": Date.now}
});

var resourceSchema = new mongoose.Schema({
	title: {type:String, required:true},
	description: {type:String, required:true},
	link: {type:String, required:true},
	rating:{type:Number, "default":0, min:0, max:5},
	reviews:[reviewSchema]
});

mongoose.model('Resource', resourceSchema);
