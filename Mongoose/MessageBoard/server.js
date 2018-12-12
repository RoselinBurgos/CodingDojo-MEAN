var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('express-flash');
var moment = require('moment');

app.use(session({secret: 'code', cookie: {maxAge:60000}} ));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//Name of the database
mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;

var CommentSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3},
    comment: { type: String, required: true, maxlength: 200 },
}, {timestamps: true })

var MessageSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3},
    message: { type: String, required: true, maxlength: 200 },
    comments:[CommentSchema] 
}, {timestamps: true })

var Message = mongoose.model('Message', MessageSchema);
var comm = mongoose.model('Comment', CommentSchema);

app.listen(8000, function() {
    console.log("listening on port 8000");
})

app.get('/', function(req, res) {
    Message.find({}, function(err, message) {
        if(err) {console.log(err);}
       res.render('index',{message: message});
    }).sort({createdAt: "desc"})
       
})

app.post('/addmessage', function (req, res){
    Message.create(req.body,function(err,data){
        if(err) {
            console.log(add_post.errors);
        }
        console.log("Message Posted");
        res.redirect('/');
    });
});

app.post('/addcomment', function(req, res){
    comm.create(req.body, function(err, data){
        if(err){
            console.log("something went wrong", err);
            for(var key in err.errors){
                req.flash("stress", err.errors[key].message);
            }
            res.redirect('/')
        }
        else{
            Message.findOneAndUpdate({_id: req.body.msgId}, {$push: {comments:data}}, function(err,data){
            if(err){
                console.log("something went wrong", err);
                res.redirect('/')
            }
            else{
                res.redirect('/')
            }
            })

        }
    })
})
