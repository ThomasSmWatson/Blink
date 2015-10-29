var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/node_config.json');
var app = express();

mongoose.connect('mongodb://'+config.database.address+':'+config.database.port);

var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(callback){
	console.log('Database connected on Address :: '+ config.database.address +':'+config.database.port);
});


app.use(express.static('Public'));
app.get('/',function(req,res){
	res.render('index');
});
app.listen(3000);
console.log('Server up on port 3000');
