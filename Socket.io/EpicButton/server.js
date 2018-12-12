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
    res.render('index', {title: "The Great Number Game"});
  });

//Declare variable count and set it to 0
var count = 0;

io.sockets.on('connection', function(socket) {
  console.log('Client/socket is connected!');
  console.log('Client/socket id is: ', socket.id);
  // when a new connection is made emit to the individual connection the current current count
  
  socket.emit('user', {count});
  // the server listens for button_clicked and increases count by 1 when it hears the event. It then emits to all connections the updated count
  socket.on('button_pushed', function() {
    count += 1;
    io.sockets.emit('count_add', {count});
    
  });
  // the server listens for rest and sets the count to 0 when it hears the event. It then emits to all connections the updated count
  socket.on('reset', function() {
    count = 0;
    io.sockets.emit('reset_count', {count});
  });
});


