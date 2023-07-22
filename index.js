const exp = require('express');
const cookie = require('cookie-parser');
const bodyParser = require('body-parser');
const app = exp();
const port = 3700;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
// in the tutorial video, npm install node-sass-middleware is used and it is deprecated,
// as of 22.07.23
// use either of these command npm install node-sass sass-middleware
//or npm install sass-middleware
const sassMiddleware = require('sass-middleware');


	// Use sassMiddleware for Sass compilation
	app.use(sassMiddleware({
   	// Path to your Sass files
	src:path.join(__dirname, 'assets', 'sass'), 
    // Destination for compiled CSS files
	dest:  'assets/css', 
    // Set to true to see debug messages
	debug: true, 
   // Choose your desired output style (e.g., 'compressed', 'nested', 'expanded')
	outputStyle: 'extended', 
   // Prefix for compiled CSS files
	prefix: '/css' 
}));
	// app.use(sassMiddleware({
	// 	src:exp.static(path.join(__dirname, 'assets')),
	// 	dest:'assets/css',
	// 	debug:true,
	// 	outputStyle:'extended',
	// 	prefix:'/css'
	// }));




	// connecting to Database
	const db = require('./config/mongoose')
	// Importing express-session library
	const session = require('express-session');
	// importing passport library
	const passport = require('passport');
	// importing connect mongo library
	const MongoStore =   require('connect-mongo');
	// fetching passport strategy file from config folder
	const passportStrategy = require('./config/passport-local-strategy');
	
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

	

	// set up the view engine
	app.set('view engine', 'ejs');
	app.set('views', './views');
	// Mongo store is used to store the session cookie in the Database
	app.use(session({
		name: 'Codeial',
		//To do change the secret before deployment in prod. phase
		secret: 'blahsomething',
		saveUninitialized: false,
		resave: false,
		cookie:{
			maxAge:(1000*60*100)
		},
		store: MongoStore.create(
			{ 
				mongoUrl:'mongodb://127.0.0.1:27017/codeialDevelopment',
				autoremove:'disabled'
			},
		function(err){
			console.log(err || 'Connection to MongoDb Ok Tested');
		}
		)

	}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(passport.setAuthenticatedUser);
	// set up the express router
	app.use('/', require('./routes'));


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