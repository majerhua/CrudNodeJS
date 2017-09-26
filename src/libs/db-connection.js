const mongoose = require('mongoose');


var db;

module.exports = function Connection(){

	if (!db){
		db = mongoose.connect('mongodb://localhost/crud-example', {
			useMongoClient: true
		});
	}

	return db;
}