var db = require('../db')
var Post = db.model('Post', {
	username: {
		type: String,
		required: true
	},
	zone: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true,
		default: Date.now
	},
	lat:{
		type: String,
		required: true,
		default: '-31.4135'
	},
	lng:{
		type: String,
		required: true,
		default: '-64.1811'
	}
})
module.exports = Post
