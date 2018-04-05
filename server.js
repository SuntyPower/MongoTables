var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')
var router = express.Router();
var path    = require("path");

var app = express()


app.use(bodyParser.json())

app.listen(3000, function() {
	console.log('Server listening on', 3000)
})





app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.get('/api/posts', function(req, res, next) {
	Post.find(function(err, posts) {
		if (err) {
			return next(err)
		}
		res.json(posts)
	})
})

app.post('/api/posts', function(req, res, next) {
	var post = new Post({
		username: req.body.username,
		zone: req.body.zone
	})
	post.save(function(err, post) {
		if (err) {
			return next(err)
		}
		res.json(201, post)
	})
})
