var express = require('express');
var router = express.Router();
var Post = require('../models/post')

/* GET home page. */
router.get('/', function(req, res, next) {
	Post.find(function(err, posts) {
	     if(err) res.send(err);
	       res.render('index', {title: 'Posts', post: posts});
	    });
});


module.exports = router;
