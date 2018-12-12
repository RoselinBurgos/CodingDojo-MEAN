var mongoose = require('mongoose');
var authors = require('../controllers/authors.js');

module.exports = function(app){
	
	app.get('/api/author', authors.index);
	app.get('/api/author/:id', authors.show_one);
	app.post('/api/author/new', authors.create);
	app.put('/api/update/:id', authors.update);
	app.delete('/delete/:id', authors.delete);

}