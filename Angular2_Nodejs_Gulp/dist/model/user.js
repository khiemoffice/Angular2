var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user = new Schema({
	email:{type: String, unique:true},
	password:{type: String},
	profile:{
		name:{type: String, unique:true}
	}
	
});

module.exports = mongoose.model("User", user)