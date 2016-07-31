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
	if(req.params && req.params.resourceid){
	Res
	   .findById(req.params.resourceid)
	   .exec(function(err, resource) {
	   	if(!resource){
	   		sendJsonResponse(res, 404, {
	   			"message":"Resource not found"
	   		});
	   		return;
	   	} else if(err){
	   		sendJsonResponse(res, 404,err);
	   		return;
	   	}
	   	sendJsonResponse(res, 200, resource);
	   });
	} else {
		sendJsonResponse(res, 404, {
			"message":"No resource id in the request"
		});
	}
	};

module.exports.resourcesUpdateOne = function(req, res) { };
module.exports.resourcesDeleteOne = function(req, res) { };


