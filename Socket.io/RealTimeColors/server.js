var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var server = app.listen(8000);
var io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    //title is passed like jinja.
    res.render('index', {title: "Real-Time Colors"});
  });

io.sockets.on('connection', function(socket) {
    console.log('Client/socket is connected!');
    console.log('Client/socket id is: ', socket.id);

//listening for "CHANGE" and emits "color_change"
socket.on('blue', function() {
    io.sockets.emit('change_blue');
}); 

socket.on('green', function() {
    io.sockets.emit('change_green');
}); 

socket.on('pink', function() {
    io.sockets.emit('change_pink');
}); 


  });