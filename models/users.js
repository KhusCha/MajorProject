
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
		required:true
	}
},{timestamps:true});

const User = mongo.model('User', userSchema);

module.exports = User;