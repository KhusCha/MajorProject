// importing user from model folder

const User = require('../models/users');

module.exports.profile= function(req, res){

	// return res.render('profile',{
	// 	title: "Profile Page"
	// });

	if(req.cookies.User_id){
		User.findById(req.cookies.User_id).then((user)=>{
			if(user){
				return res.render('profile',{
					title: "Profile Page",
					user:user
				});

			}else{
				return res.redirect('/users/signIn');
			}
		}).catch( (err)=>{
			console.log('Error in finding User', err);
			return res.redirect('/users/signIn');
		});
	}
};


module.exports.signIn = function(req, res){

	return res.render('userSignIn', {
		title: "Codeial-SignIn"
	});
};
module.exports.signUp = function(req, res){

	return res.render('userSignUp', {

		title: "Codeial- SignUp"
	});
}
module.exports.konto = function(req, res){

	//return res.send("<h2> You Account registration is successfull</h2>");

	return res.render('konto',{

		title: "Benutzer Konto"
	});
};
// get the Sign Up data

module.exports.create = function(req, res){
	//console.log("This is the request body", req.body.password!= req.body.confirmPassword,req.body);
	if(req.body.password!= req.body.confirmPassword){
		console.log("Password doesnot match");
		return res.redirect('/users/signUp');
	}
	User.findOne({email:req.body.email}, function(err, user){
		if(err){console.log("Error in finding User, while Signing Up"); return}

		if(!user){
			User.create(req.body, function(err, user){
			if(err){console.log.info("Error in Creating User, while Signing Up"); return}
				console.info("User Profile");
				return res.redirect('/users/signIn');
			});
		}else{
			console.log("back to signUp");
			return res.redirect('/users/signUp');
			
		}
	})
};

// get the Sign In data

module.exports.createSession = function(req, res){
		
	// To do Later should go now, 17/07/23 17:55Uhr

    return res.redirect('/');

	

}	