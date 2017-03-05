const express = require('express');
const app = express();
var engines = require('consolidate');

app.engine('html', engines.mustache);
app.set('view engine', 'html');

// NEW CODE
app.use('/public', express.static(__dirname + '/public'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));


// END OF NEW CODE

app.get("/", function(req,res){
    res.render('index.html')
});

app.listen(80, () => {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});

