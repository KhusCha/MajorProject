// render the home page
module.exports.home = function(req, res){

	return res.render('ejsHome',{

		title: "Home Page"
	});
}

// get the Sign Up data

module.exports.create = function(req, res){

}

// get the Sign In data

module.exports.createSession = function(req, res){

}