var tigger = {character: "Tigger",
    north: pooh,  
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
        },
    item: false,
};  

var pooh = {character: "Winnie the Pooh",
    south: tigger,
    west : piglet,
    east : bees,
    north : chris,
    greet: function(){
    console.log("I used to believe in forever, but forever's too good to be true");
    },
    item: false,
};


var piglet = {character: "Piglet",
    east: pooh,
    north: owl,
    greet: function(){
    console.log("Even though I have a very Small Heart, it can hold a rather large amount of Gratitude");
    },
    item: false,
};


var bees = {character: "Bees",
    west: pooh,
    north: rabbit,
    greet: function(){
    console.log("ZZzzzZZZzzz");
    },
    item: false,

};



var chris = {character: "Christopher Robin",
    south: pooh,
    west : owl,
    east : rabbit,
    north: kanga,
    greet: function(){
    console.log("Silly ol' bear!");
    },
    item: false,

};


var owl = {character: "Owl",
    south : piglet,
    east: chris,
    greet: function(){
    console.log("Silly ol' bear!");
    },
    item: false,
};


var rabbit = {character: "Rabbit",
    south: bees,
    west: chris,
    east:gopher,
    greet: function(){
    console.log("Hop Hop Hop");
    },
    item: false,

};

var gopher = {character: "Gopher",
    west: rabbit,
    greet: function(){
    console.log("Digging tunnels, dig, dig, dig.");
    },
    item: false,

};


var kanga = {character: "Kanga",
    south: chris,
    north:eeyore,
    greet: function(){
    console.log("Roo where are you?");
    },
    item: false,

};

var eeyore = {character: "Eeyore",
    south: kanga,
    east: hef,
    greet: function(){
    console.log("Thanks for noticin' me");
    },
    item: false,

};


var hef = {character: "Heffalumps",
    south: kanga,
    east: hef,
    greet: function(){
    console.log("I think I'd better go home now");
    },
    item: false,


};

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
        location: tigger,
        honey: true 

    }

function mission(){
    var arr = [tigger,pooh,piglet,chris,owl,rabbit,gopher,kanga,eeyore,hef];
    var math = Math.floor(Math.random() * Math.floor(arr.length));
    var picked = arr[math];
    picked.item = true; 
    console.log(picked.character + "is looking for honey! Can you help?");
    
}

function pickUp(){
    if(player.location == bees){
        player.honey = true;
        console.log("You've gathered some honey!");
    }else{
       console.log("No Honey Here");
    }   
}

function drop(){
    if(player.location.item == true){
        console.log("Congratulations! You delivered the honey to" + player.location.character);
    }else{
        console.log("Whoops, This isn't a place that needs the honey!");
    }

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
        console.log(player.location.greet());
        
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
        console.log(player.location.greet());
        
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
        console.log(player.location.greet());
        
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
        console.log(player.location.greet());
        
        }
    }

}

move("north");
move("east");
move("west");










