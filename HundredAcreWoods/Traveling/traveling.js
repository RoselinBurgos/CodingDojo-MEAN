var tigger = {character: "Tigger",};
var pooh = {character: "Winnie the Pooh"};
var piglet = {character: "Piglet"};
var bees = {character: "Bees"};
var chris = {character: "Christopher Robin"};
var owl = {character: "Owl"};
var rabbit = {character: "Rabbit"};
var gopher = {character: "Gopher"};
var kanga = {character: "Kanga"};
var eeyore = {character: "Eeyore"};
var hef = {character: "Heffalumps"};

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

var player = {
        location: tigger
    }


function move(str){
    if(str=="north")
    {
        if(player.location.north == null){
            console.log("You cannot go there!")
        }
        else{
        player.location = player.location.north;
        console.log("You are now at " + player.location.character + "'s house");
        
        }
    }

    if(str=="south")
    {
        if(player.location.south == null){
            console.log("You cannot go there!")
        }
        else{
        player.location = player.location.south;    
        console.log("You are now at " + player.location.character + "'s house");
        
        }
    }

    if(str=="east")
    {
        if(player.location.east == null){
            console.log("You cannot go there!")
        }
        else{
        player.location = player.location.east;
        console.log("You are now at " + player.location.character + "'s house");
        
        }
    }

    if(str=="west")
    {
        if(player.location.west == null){
            console.log("You cannot go there!")
        }
        else{
        player.location = player.location.west;
        console.log("You are now at " + player.location.character + "'s house");
        
        }
    }

}

move("west");
move("east");
move("south");
move("north");
move("west");
move("west");
move("north");
move("east");
move("east");
move("south");
move("north");
move("east");
move("west");
move("west");
move("north");
move("east");
move("west")
move("north");
move("east");
move("north");







