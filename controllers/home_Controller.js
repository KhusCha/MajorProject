// Importing Post from model

const Post = require('../models/post');
const User = require('../models/users');

// render the home page
module.exports.home = function(req, res){

	/* console.log(req.cookies);
	res.cookie('user_id',22); */
	// Post.find({}, function(err, posts){
	// 	return res.render('ejsHome',{

	// 		title: " Codeial Home Page",
	// 		posts: posts
	// 	});

	// });

	//Populate the user of each post
	Post.find({}).populate('user').then(function( posts){
		console.log(posts);
		return res.render('ejsHome',{

			title: " Codeial Home Page",
			posts: posts
			
		});
	}).catch(function(err){
		console.log(err);
	});
		
	
}









