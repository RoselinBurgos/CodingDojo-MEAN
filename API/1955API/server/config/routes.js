var mongoose = require('mongoose');
var Name = mongoose.model('Name');
var name = require('../controllers/names.js');

module.exports = function(app){

	// app.get('/', function(req, res) {
	//     name.index(req,res);
	// });

	// app.get('/new/:name', function(req, res) {
	//     name.newName(req,res);
	// });

	// app.get('/remove/:name', function(req, res) {
	//     name.remove(req,res);
    // });
    
    app.get('/', name.index);
    app.get('/new/:name', name.newName);
    app.get('/remove/:name', name.remove);






}