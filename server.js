var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

ig.use({
	access_token: '292891873.1677ed0.c2b184d386db490cb17554ba924a2cab',
    });

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	ig.user_self_media_recent(function(err, medias, pagination, remaining, limit){
					   // render the home page and pass in the popular images
					   res.render('pages/index', { grams: medias });
					   });
    });

app.listen(8080);
console.log('App started! Look at http://localhost:8080');