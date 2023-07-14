


// render the home page
module.exports.home = function(req, res){

	/* console.log(req.cookies);
	res.cookie('user_id',22); */
	return res.render('ejsHome',{

		title: "Home Page"
	});
}



