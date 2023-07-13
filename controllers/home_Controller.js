// importing user from model folder

const User = require('../models/users');


// render the home page
module.exports.home = function(req, res){

	console.log(req.cookies);
	res.cookie('User_id',22);
	return res.render('ejsHome',{

		title: "Home Page"
	});
}

// get the Sign Up data

module.exports.create = function(req, res){
	console.log("This is the request body", req.body.password!= req.body.confirmPassword,req.body);
	if(req.body.password!= req.body.confirmPassword){
		console.log("Password doesnot match");
		return res.redirect('/signUp/signUp');
	}
	User.findOne({email:req.body.email}, function(err, user){
		if(err){console.log.info("Error in finding User, while Signing Up"); return}

		if(!user){
			User.create(req.body, function(err, user){
			if(err){console.log.info("Error in Creating User, while Signing Up"); return}

				return res.redirect('/routeIndex/signIn');
			});
		}else{
			return res.redirect('/signUp/signUp');
		}
	})
}

// get the Sign In data

module.exports.createSession = function(req, res){

}