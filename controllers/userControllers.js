// importing user from model folder

const User = require('../models/users');

module.exports.profile= function(req, res){

	return res.render('profile',{
		title: "Profile Page"
	});
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
		
	// Find the user

	// User.findOne({email:req.body.email}, function(err, user){
	// 	console.log(user);
	// 			if(err){console.info("Error in finding User, while Signing In"); return;}

	// 		// Handle user found
	// 		if(user){
	// 			if(user.password != req.body.password){
	// 				//Handle if password doesnot match
	// 				return res.redirect('back');
	// 			}
				
	// 			// Handle session creation
	// 			res.cookie('user_id', user.id);
	// 			return res.redirect('/users/profi');
	// 		}else{
	// 			//Handle user not found

	// 			return res.redirect('back');
	// 		}
	// });

	User.findOne({name:req.body.name}).then(function(user){
			console.log(user);
		if(user.password != req.body.password){
				//Handle if password doesnot match
			console.log("Entered password",user.password);
				return res.redirect('back');
				// Handle session creation
				
			}
			if(user){
				res.cookie('User_id', user.id);
				return res.redirect('/users/profi');
			}else{
				return res.redirect('back');
			}


	}).catch(function(err){
		console.error("Error in finding User, while Signing In"); return;
	});
	

}	
	