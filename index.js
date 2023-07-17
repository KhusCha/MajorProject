const exp = require('express');
const cookie = require('cookie-parser');
const bodyParser = require('body-parser');
const app = exp();
const port = 3700;
const expressLayouts = require('express-ejs-layouts');

	// connecting to Database
	const db = require('./config/mongoose')
	
	app.use(bodyParser.urlencoded({extended:false}));
	app.use(exp.urlencoded({extended:false}));
	// Using cookie parser

	app.use(cookie());
	// telling the app assets folder location
	app.use(exp.static('./assets'));

	// Using expressLayouts
	app.use(expressLayouts);

	// extracting styles and scripts from the subfiles to layout.ejs file

	app.set('layout extractStyles', true);
	app.set('layout extractScripts', true);

	// set up the express router
	app.use('/', require('./routes'));

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