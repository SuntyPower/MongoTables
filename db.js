var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/local', function() {
	console.log('mongodb connected')
})
module.exports = mongoose
