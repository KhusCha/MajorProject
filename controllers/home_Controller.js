// Importing Post from model

const Post = require('../models/post');

// render the home page
module.exports.home = function(req, res){

	/* console.log(req.cookies);
	res.cookie('user_id',22); */
	Post.find({}, function(err, posts){
		return res.render('ejsHome',{

			title: " Codeial Home Page",
			posts: posts
		});

	});
	
}
