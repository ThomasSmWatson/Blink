var express = require('express');

var app = express();


app.use(express.static('Public'));
app.get('/',function(req,res){
	res.render('index');
});
app.listen(3000);
console.log('Server up on port 3000');
