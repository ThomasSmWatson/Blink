var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
	{
		email: { 
			type:String,
			required: true
		},
		dob: {
			type: String,
			required: true
		},
		password: {
			type:String,
			required:true
		},
		postcode: {
			type:String,
			required:true
		},
		address: {
			type:String,
			required:true
		}
	}
);

module.exports = mongoose.model('User',userSchema);

