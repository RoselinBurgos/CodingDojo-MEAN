var express = require("express");

var app = express();

app.get('/', function(request, response) {
  response.render('index');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

app.get("/cats", function (request, response){
  var kitty_array = [
      {name: "Jax", food: "Spaghetti", Age: "3", sleeping: "Under the bed", image:"cat1.jpg"}, 
      {name: "Dexter",food: "Pizza", Age: "2", sleeping: "Under the car", image:"cat2.jpg"}, 
      {name: "Lyla", food: "Moist and Meaty", Age: "1", sleeping: "On the couch", image:"cat3.jpg"}, 
  ];
  response.render('cats', {cats: kitty_array});
})

app.get("/jax", function (request, response){
  var kitty_array = [
      {name: "Jax", food: "Spaghetti", age: "3", sleeping:["Under the car","On the couch","On the bed"], image:"cat1.jpg"}, 
      {name: "Dexter",food: "Pizza", age: "2", sleeping: "Under the car", image:"cat2.jpg"}, 
      {name: "Lyla", food: "Moist and Meaty", age: "1", sleeping: "On the couch", image:"cat3.jpg"}, 
  ];
  response.render('jax', {cats: kitty_array});
})

app.get("/dexter", function (request, response){
  var kitty_array = [
      {name: "Jax", food: "Spaghetti", age: "3", sleeping:["Under the car","On the couch","On the bed"], image:"cat1.jpg"}, 
      {name: "Dexter",food: "Pizza", age: "2", sleeping:["In a tree","Outside","Under the couch"], image:"cat2.jpg"}, 
      {name: "Lyla", food: "Moist and Meaty", age: "1", sleeping: "On the couch", image:"cat3.jpg"}, 
  ];
  response.render('dexter', {cats: kitty_array});
})

app.get("/lyla", function (request, response){
  var kitty_array = [
      {name: "Jax", food: "Spaghetti", age: "3", sleeping: "Under the bed", image:"cat1.jpg"}, 
      {name: "Dexter",food: "Pizza", age: "2", sleeping: "Under the car", image:"cat2.jpg"}, 
      {name: "Lyla", food: "Moist and Meaty", age: "1", sleeping:["In her Bed","On swing","On the kitchen floor"], image:"cat3.jpg"}, 
  ];
  response.render('lyla', {cats: kitty_array});
})




