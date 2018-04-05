var express = require('express')
var Post = require('../models/post')
var router = express.Router();
var app = express()


router.get('/', function(req, res, next) {
	Post.find(function(err, posts) {
	     if(err) res.send(err);
	       res.render('posts', {post: posts});
	    });
});


router.post('/', async function(req, res) {
try{
	var post = new Post({
		username: req.body.username,
		zone: req.body.zone
	})
	await post.save()
	res.json(201, post)
	console.log(post); 
}catch(err){
	res.sendStatus(500)
	console.error(error)
}
})



module.exports = router;
