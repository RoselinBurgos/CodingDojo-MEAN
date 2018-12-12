class Card{
    constructor(suit,value,numval){
        this.suit = suit;
        this.value = value;
        this.numval = numval;

    }

    printcard(){
        console.log(`Suit: ${this.suit} Value: ${this.value} Numerical Value: ${this.numval} `);
    }

}

class Deck{
    constructor(){
        this.cardarr = this.makeDeck();
    }

    makeDeck(){
        var newarr = [];
        var stringValArr = ["Ace", "two", "three", "four", "five", "six","sever", "eight","nine","ten","jack","queen","king"];
        for(var i = 1; i < 14; i++){
            newarr.push(new Card("spades",stringValArr[i-1],i));
            newarr.push(new Card("hearts",stringValArr[i-1],i));
            newarr.push(new Card("clovers",stringValArr[i-1],i));
            newarr.push(new Card("diamonds",stringValArr[i-1],i));
        }
        return newarr;
    }
    

    shuffle(){
            var m = this.cardarr.length, t, i;

            while (m) {
              i = Math.floor(Math.random() * m--);
              t = this.cardarr[m];
              this.cardarr[m] = this.cardarr[i];
              this.cardarr[i] = t;
            }
            console.log(this.cardarr);
          }

    reset(){
        this.cardarr = this.makeDeck();
    }

    deal() {
        let c = Math.floor(Math.random()*this.cardarr.length);
        var card = this.cardarr[c];
        this.cardarr.splice(c,1);
        return card;
      }
}

class Player {
    constructor(name){
      this.name=name;
      this.hand=[];
    }
    draw(deck) {
      var c = deck.deal();
      console.log(`${this.name} drew ${c}.`);
      this.hand.push(c);
      return this;
    }
    discard(num) {
      if (this.hand.indexOf(num) > -1) {

        console.log(`${this.name} discarded ${num}.`);
        let c = this.hand.indexOf(num);
        this.hand.splice(c,1);

        return this.hand;
      }
      else{
        console.log(`${this.name} does not have ${num}.`);
        return this.hand;
      }
    }
  }


var test = new Deck();
test.shuffle();
test.reset();
console.log(test);
test.deal();
console.log(test);