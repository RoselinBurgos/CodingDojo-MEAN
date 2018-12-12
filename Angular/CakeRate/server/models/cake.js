var mongoose = require('mongoose');


var commentSchema = new mongoose.Schema({
    comment: {type : String},
    rating: {type : Number},
    completed: {type: Boolean, default: false},
}, {timestamps: true })

var cakeSchema = new mongoose.Schema({
    name: {type : String},
    url: {type : String},
    comments : [commentSchema],
    completed: {type: Boolean, default: false},
}, {timestamps: true })

mongoose.model('Comment', commentSchema); 
mongoose.model('Cake', cakeSchema); 