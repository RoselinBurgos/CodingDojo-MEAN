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
    res.render('index', {title: "Survey Form"});
  });


//Sets up the socket route and has a message just to check that its connected. Shows in cmd
io.on('connection', function (socket) { 
  console.log('Using Sockets Here!');
  console.log(`The socket being used is: ${socket.id}`);
  

  //Listening for response from "form_submitted"
  socket.on( "form_submitted", function (data){
    console.log(data);
    //Generating the random number
    let num = Math.floor(Math.random()*1000+1);
    //Setting the data that was recieved as a variable
    var stuff = `You emitted the following information to the server: Name: ${data.name}, Location: ${data.location}, Language: ${data.lanuguage}, Comment: ${data.comment} `
    var rnum = `Your lucky number emitted by the server is: ${num}`


    //sending to "server_response"
    socket.emit('server_response', {topMessage: stuff, randomNumber: rnum});

    //sending the random number 
    
   
  });

  
});
      

