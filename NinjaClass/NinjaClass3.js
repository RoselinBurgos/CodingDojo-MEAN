class Ninja{
    constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
}
    sayName(){
        console.log(`My ninja name is ${this.name}!`);
        
      }
  
    showStats (){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
  
      }
    
    drinkSake(){
        this.health += 10;
        console.log(`Drank Sake! Health is now: ${this.health} !`);
      }
  
  }

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("If you follow someone else, you are ignoring your own path");

    }
}
  
ninja1 = new Ninja('Timmy');
ninja1.sayName()
ninja1.drinkSake()
ninaja1.showStats();

superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();