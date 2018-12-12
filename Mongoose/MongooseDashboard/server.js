var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('express-flash');
var moment = require('moment');

//Name of the database
mongoose.connect('mongodb://localhost/animal_list');
mongoose.Promise = global.Promise;

app.use(session({secret: 'code'}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


var AnimalSchema = new mongoose.Schema({
    name:  { type: String, required: [true,"Name can not be empty"], minlength: 3},
    age: { type: Number,required: [true,"Age can not be empty"]},
    location: { type: String, required:[true,"location can not be empty"], maxlength: 50},
}, {timestamps: true })

//Rabbit is the name of the table make sure to run "show collections" on shell. Sometimes makes it lowercase and plural
var Rabbit = mongoose.model('Rabbit', AnimalSchema); 


app.get('/', function(req, res) {
    Rabbit.find({}, function(err, rabbit) {
        if(err) {console.log(err);}
       res.render('index',{rabbit: rabbit, moment: moment});
    }).sort({createdAt: "desc"})
       
})

app.get('/rabbits/new', function(req, res) {
    res.render('add');
})

//pulls animal if and adds it to url 
app.get('/rabbits/:id', function(req, res) {
    Rabbit.find({_id:req.params.id}, function(err, rabbit) {
        if (err) { 
            console.log(err); 
        }
        else{res.render('user', {rabbit: rabbit});}
        
    })
    console.log('finding rabbit IDs');
})

app.get('/rabbits/edit/:id', function(req, res) {
    Rabbit.findOneAndUpdate({_id:req.params.id},{
        name: req.body.name,
        age: req.body.age,
        location: req.body.location,
    },function(err, rabbit) {
        if (err) { console.log(err); }
    else{res.render('edit', {rabbit: rabbit});}
    })
})

app.post('/rabbits/destroy/:id', function(req, res) {
    Rabbit.remove({_id:req.params.id}, function(err, rabbit) {
        if (err) { 
            console.log(err); 
        }
        else{   
            res.redirect('/');
        }
        
    })
})


app.post('/add', function (req, res){
    var animal = new Rabbit(req.body);
    animal.save(function(err){
        if(err){
            console.log("We have an error!", err);
              for(var key in err.errors){
                  //bark is what you are naming the alerts
                  req.flash('bark', err.errors[key].message);
              }
              res.redirect('/rabbits/new');
          }
          else {
              console.log(req.body);
              res.redirect('/');
              
          }
      });
});


app.listen(8000, function() {
    console.log("listening on port 8000");
})