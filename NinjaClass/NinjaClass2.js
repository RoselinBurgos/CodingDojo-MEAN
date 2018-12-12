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
    
    Ninja.prototype.punch = function(ninja2){
        if(ninja2 instanceof Ninja == true){
          ninja2.health -= 5;
          console.log(`${ninja2.name} was punched by ${this.name} and lost 5 health!`);
        }
        else{
          console.log("Can't punch anyone beacuase No ninja here!");
        
        }
      }

    Ninja.prototype.kick = function(ninja2){
        if(ninja2 instanceof Ninja == true){
            ninja2.health -= 15*strength;
            console.log(`WOW! ${ninja2.name} was kicked by ${this.name} and lost ${15*strength} health!`);
        }else{
            console.log("Can't kick anyone because No ninja here!");
        }
    }
  
  
  }
  
  var blueNinja = new Ninja("Goemon");
  var redNinja = new Ninja("Bill Gates");
  
  blueNinja.sayName();
  blueNinja.showStats();
  blueNinja.drinkSake();
  redNinja.punch(blueNinja);
  redNinja.punch();
  blueNinja.showStats();
  redNinja.kick(blueNinja);
  redNinja.kick();
  blueNinja.showStats();
