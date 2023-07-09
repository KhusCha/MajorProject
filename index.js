const exp = require('express');

const app = exp();
const port = 3700;

	// set up the express router
	app.use('/', require('./routes/routeIndex'));

	// set up the view engine
	app.set('view engine', 'ejs');
	app.set('views', './views');


	app.get('/', function(req, res){

	return res.send("for the console,changed one");
	//return res.end("Res.end is responsible to print on the browser");
	});

	app.listen(port, function(err){

	if(err){

		console.info('Oopy!!!!! Something went Wrong');
	}

	console.info("Server is up at","\t",port);
	});