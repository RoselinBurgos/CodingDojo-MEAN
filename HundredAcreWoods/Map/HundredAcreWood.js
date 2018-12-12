var tigger = {character: "Tigger"};
var pooh = {charcter: "Winnie the Pooh"};
var piglet = {charcter: "Piglet"};
var bees = {charcter: "Bees"};
var chris = {charcter: "Christopher Robin"};
var owl = {charcter: "Owl"};
var rabbit = {charcter: "Rabbit"};
var gopher = {charcter: "Gopher"};
var kanga = {charcter: "Kanga"};
var eeyore = {charcter: "Eeyore"};
var hef = {charcter: "Heffalumps"};

//tigger
tigger.north = pooh;

//pooh
pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = chris;

//piglet
piglet.east = pooh;
piglet.north = owl;

//bees
bees.west = pooh;
bees.north = rabbit;

//christopher
chris.south = pooh;
chris.west = owl;
chris.east = rabbit;
chris.north = kanga;

//owl
owl.south = piglet;
owl.east = chris;

//rabbit
rabbit.south = bees,
rabbit.west = chris;
rabbit.east = gopher;

//gopher
gopher.west = rabbit;

//kanga
kanga.south = chris;
kanga.north = eeyore;

//eeyore
eeyore.south = kanga;
eeyore.east = hef;
