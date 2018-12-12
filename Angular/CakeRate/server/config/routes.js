var mongoose = require('mongoose');
var cakes = require('../controllers/cakes.js');

module.exports = function(app){
    
	app.post('/api/cakes', cakes.create);
	app.get('/api/cakes', cakes.index);
	app.post('/api/cakes/:id', cakes.createComment);

}