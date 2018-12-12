// Predict the output of the following snippets.

1. 
console.log(hello);                                   
var hello = 'world';

// Undefined

// First it console logs the variable hello but at that point the variable has not been defined.
// Then it defines the variable hello.
// The output is undefined.


2. 
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

// "magnet"

// First it defines the variable needle
// Then it calls the function test
// The fucntion test defines the variable needle as 'magnet'
// It then console logs needle.
// The output is "magnet"

3. 
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// "super cool"
// First the variable brendan is set.
// Then you have the function called print.
// The print fucntion is never called. 
// Then is console logs brendan which is "super cool"

4. 
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// "chicken" "half-chicken"

// First the variable food is set
// then console log food which is "chicken"
// Then the function eat is called
// Then goes through the function
// food is set to 'half-chicken'
// then is console logs chicken which is "half-chicken" within the function
// "chicken" "half-chicken"

5. 
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

//"TypeError: mean is not a function"

// First the function mean is called
// Then it asks to console log 'food' but no variable for that is set.
// Then a variable mean is defined
// Then it asks to console log 'food' but no variable for that is set.
//"TypeError: mean is not a function"


6. 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// undefined "rock" "r&b" "disco"

// First it console logs 'genre' which has not been defined
// Then it sets variable genre to 'disco'
// Then the rewind function is called
// Within the rewind function, genre is set to 'rock' and then console logged
// Then, within the function genre is set to 'r&b' and then console logged
// Then it exits out of the function and console logs genre which was defined outside the function as 'disco'
// undefined "rock" "r&b" "disco"


7. 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// "san jose" "seattle" "burbank" "san jose"

// First it defines dojo as 'san jose'
// then it console logs dojo which is 'san jose'
// then it calls the function learn
// Then the function learn sets dojo to seattle within the fucntion
// Then console logs dojo which is 'seattle'
// Then the function learn sets dojo to burbank within the fucntion
// Then console logs dojo which is 'burbank'
// Then outside the function you console log dojo which is 'san jose'
// "san jose" "seattle" "burbank" "san jose"
