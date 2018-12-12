function Ninja(name){
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;

  Ninja.prototype.sayName = function(){
      console.log(`My ninja name is ${this.name}!`);
      
    }

    Ninja.prototype.showStats = function(){
      console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`);

    }
  
  Ninja.prototype.drinkSake = function(){
      this.health += 10;
      console.log(`Drank Sake! Health is now: ${this.health} !`);
    }


}

var bob = new Ninja("Timmy");

bob.sayName()
bob.showStats()
bob.drinkSake()