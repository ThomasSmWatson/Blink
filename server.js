var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/node_config.json');
var bodyParser = require('body-parser');
var fs = require('fs');
var User = require('./Schemas/user');

var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://'+config.database.address);

var db = mongoose.connection;




db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(callback){
	console.log('Database connected on Address :: '+ config.database.address +':'+config.database.port);
});


app.use(express.static('Public'));
app.get('/',function(req,res){
	res.render('index');
});

app.post('/user', function(req,res){
	var user =  new User(req.body);
	user.save(function(err,user){
		if(err) console.log(err);
		console.log("Successfully added user to MongoDB");
		res.sendStatus(200);
	});
	
});




app.listen(3000);
console.log('Server up on port 3000');
