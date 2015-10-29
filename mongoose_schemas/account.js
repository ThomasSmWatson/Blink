var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema {
	email: String,
	password_hash: String,
	dob: Date,
	register_date: Date,
	address: String,
	postcode: String
}

