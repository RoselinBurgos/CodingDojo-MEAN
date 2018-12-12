var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('express-flash');
var moment = require('moment');

mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;

app.use(session({secret: 'code'}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var UserSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3},
    quote: { type: String, required: true, maxlength: 200 },
}, {timestamps: true })

var User = mongoose.model('User', UserSchema); 


app.get('/', function(req, res) {
    res.render('index');
})

app.get('/quotes', function(req, res) {
    User.find({}, function(err, users) {
        if(err) {console.log(err);}
       res.render('quotes',{allusers: users, moment: moment});
    }).sort({createdAt: "desc"})
       
})

app.post('/users', function (req, res){
    var user = new User(req.body);
    user.save(function(err){
        if(err){
            console.log("We have an error!", err);
              for(var key in err.errors){
                  req.flash('quote', err.errors[key].message);
              }
              res.redirect('/');
          }
          else {
              res.redirect('/quotes');
          }
      });
});


app.listen(8000, function() {
    console.log("listening on port 8000");
})


