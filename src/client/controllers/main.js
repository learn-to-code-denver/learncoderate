
/* GET home page */
module.exports.index = function(req, res){
	res.render('list-resources', { title: 'Learncoderate' });
};