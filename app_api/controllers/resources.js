var mongoose = require('mongoose');
var Res = mongoose.model('Resource');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.resourcesCreate = function (req, res) { 
	sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.resourcesList = function (req, res) { 
	sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.resourcesReadOne = function(req, res) { 
	Res
	   .findById(req.params.resourceid)
	   .exec(function(err, resource) {
	   	sendJsonResponse(res, 200, resource);
	   });

};
module.exports.resourcesUpdateOne = function(req, res) { };
module.exports.resourcesDeleteOne = function(req, res) { };


