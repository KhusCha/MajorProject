	// importing user from model folder

	const User = require('../models/users');

		// module.exports.profile= function(req, res){
			
		// 	// argument inside findById can be passed either req.params or req.params._id
		// 	User.findById(req.params.id).then(function(user){		
		// 		return res.render('profile',{
		// 			title: "Profile Page",
		// 			currentUser:user 
					
		// 		});

		// 	}).catch(function(err){
		// 		console.log(err);
		// 		return;
		// 	});
			
			

			// if(req.cookies.User_id){
			// 	User.findById(req.cookies.User_id).then((user)=>{
			// 		if(user){
			// 			return res.render('profile',{
			// 				title: "Profile Page",
			// 				user:user
			// 			});

			// 		}else{
			// 			return res.redirect('/users/signIn');
			// 		}
			// 	}).catch( (err)=>{
			// 		console.log('Error in finding User', err);
			// 		return res.redirect('/users/signIn');
			// 	});
			// }
		// }

		// Writing the above code using async await
	
	module.exports.profile = async function(req, res){
		try {
			let user = await User.findById(req.params.id);
			
			return res.render('profile',{
				title: "Profile Page",
				currentUser:user 
				
			});
			
		} catch (err) {
			console.log('Error ', err);
			return;
		}
	}
		
	// 
		module.exports.profiUpdate = function(req, res){
			if(req.user.id==req.params.id){
				User.findByIdAndUpdate(req.params.id, req.body)
				.then(function(user){

					return res.redirect('back');
				})
				
				.catch(function(){
					return res.status(401).send('Unauthorized');
				});
			}

		}


module.exports.signIn = function(req, res){

		if(req.isAuthenticated()){
			return res.redirect('/users/profi');
		}
	return res.render('userSignIn', {
		title: "Codeial-SignIn"
	});
};
module.exports.signUp = function(req, res){

	if(req.isAuthenticated()){
		return res.redirect('/users/profi');
	}
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

	// module.exports.create = function(req, res){
	// 	//console.log("This is the request body", req.body.password!= req.body.confirmPassword,req.body);
	// 	if(req.body.password!= req.body.confirmPassword){
	// 		console.log("Password doesnot match");
	// 		return res.redirect('/users/signUp');
	// 	}
	// 	User.findOne({email:req.body.email}, function(err, user){
	// 		if(err){console.log("Error in finding User, while Signing Up"); return}

	// 		if(!user){
	// 			User.create(req.body, function(err, user){
	// 			if(err){console.log.info("Error in Creating User, while Signing Up"); return}
	// 				console.info("User Profile");
	// 				return res.redirect('/users/signIn');
	// 			});
	// 		}else{
	// 			console.log("back to signUp");
	// 			return res.redirect('/users/signUp');
				
	// 		}
	// 	})
	// };

	// Get the signUp data using async await

	module.exports.create = async function(req, res){

		try {
			if(req.body.password!= req.body.confirmPassword){
				return res.redirect('/users/signUp');
				}
				let user = await User.findOne({email:req.body.email});
				if(!user){
			
				await User.create(req.body);
						
					return res.redirect('/users/signIn');
						
					}else{
						console.log("back to signUp");
						return res.redirect('/users/signUp');
						
					}
			
		} catch (err) {
			console.log('Error ', err);
			return;
			
		}
	}
// get the Sign In data

module.exports.createSession = function(req, res){
		
	// To do Later should go now, 17/07/23 17:55Uhr
	req.flash('success', 'Sie haben sich erfolgreich Angemeldet')
    return res.redirect('/home1');

	

}

// module.exports.destroySession= function(req, res,next){
// 	req.logout((err)=>{
// 		if(err){
// 			return next(err);
// 		}else{
			
// 			return res.redirect('/home1');
			
// 		}

// 	})
	
// 	return res.redirect('/home1');
// }

module.exports.destroySession=function(req,res,next){
    req.logout(function(err) {
        if (err) { return next(err); }
		req.flash('success', 'Sie haben sich erfolgreich Abgemeldet');
       return res.redirect('/home1');
		
      });
	
}
