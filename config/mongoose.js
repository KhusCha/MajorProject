
const mongo = require('mongoose');

mongo.connect('mongodb://127.0.0.1:27017/codeialDevelopment');

const db = mongo.connection;


db.on('error', console.error.bind(console, "Something went wrong while connecting to MdB"));

db.once('open', function(){

	console.log("Successfully connected to MongodB!!!!!!");
});


module.exports=db;