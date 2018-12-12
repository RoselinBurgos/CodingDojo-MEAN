var express = require("express");
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    //title is passed like jinja.
    res.render('index', {title: "Survey Form"});
  });

app.post('/results', function (req, res){
    res.render('results',{name: req.body.name, location: req.body.location, language: req.body.language, comment: req.body.comment});
  });

app.listen(8000, function() {
    console.log("listening on port 8000");
  });