var mongoose = require('mongoose');
var task = require('../controllers/tasks.js');

module.exports = function(app){
    
    app.get('/task', task.index);
	app.get('/task/:id', task.show_one);
	app.post('/task/new', task.create);
	app.put('/update/:id', task.update);
	app.delete('/delete/:id', task.delete);

}