
module.exports.profile = function(req, res){

	//return res.end("<h1> I am from Profile Controller</h1>");

	return res.render('profile',{

		title: "Profil Page"
	});
}