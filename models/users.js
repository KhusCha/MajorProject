
const mongo = require('mongoose');

const userSchema = new mongo.Schema({

	email:{
		type: String,
		required: true,
		unique: true

	},
	password:{
		type: String,
		required: true
		
	},
	name:{
		type:String,
		required:true,
		unique: true
	}
},{timestamps:true});

const user = mongo.model('Users', userSchema);

module.exports = user;