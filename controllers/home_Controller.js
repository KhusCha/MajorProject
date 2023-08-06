// Importing Post from model

const Post = require('../models/post');
const User = require('../models/users');

// render the home page
// module.exports.home = function(req, res){

// 	/* console.log(req.cookies);
// 	res.cookie('user_id',22); */
// 	// Post.find({}, function(err, posts){
// 	// 	return res.render('ejsHome',{

// 	// 		title: " Codeial Home Page",
// 	// 		posts: posts
// 	// 	});

// 	// });

// 	//Populate the user of each post
// 	Post.find()
// 	.populate('user')
// 	.populate({
// 		path:'comments',
// 		populate:{
// 			path: 'user'
// 		}
// 	})
// 	.then(function( posts){
		
// 		User.find({}).then(function(users){

// 			return res.render('ejsHome',{
		
// 						title: " Codeial Home Page",
// 						posts: posts,
// 						allUsers: users
						
// 					});
		
// 		}).catch(function(err){
// 		console.log(err);
// 		})
		
// 	}).catch(function(err){
// 		console.log(err);
// 	});
	
// }


// Render the Home Page Using async await, now the code looks cleaner

module.exports.home = async function(req, res){
				
		try{
			let posts = await Post.find({})
				.populate('user')
				.populate({
					path:'comments',
					populate:{
						path: 'user'
					}
				});

				let users = await User.find({});

				return res.render('ejsHome',{
			
					title: " Codeial Home Page",
					posts: posts,
					allUsers: users					
				});
		}catch(err){
			console.log('Error Details ', err);
			return;
		}			
}		






/*Post.find({})
	.populate('user')
	.populate({
		path:'comments',
		populate:{
			path:'user'
		}
	})
	.exec(function(err, posts){
		return res.render('ejsHome',{
	
			title: " Codeial Home Page",
			posts: posts
			
		});
	
	})
	
	 */



