
module.exports.home = function(req, res){

	return res.render('ejsHome',{

		title: "Home Page"
	});
}