
module.exports.konto = function(req, res){

	//return res.send("<h2> You Account registration is successfull</h2>");

	return res.render('konto',{

		title: "Benutzer Konto"
	});
}