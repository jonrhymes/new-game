const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

const images = ['img/0.png', 'img/1.png', 'img/2.png'];

weight = [];

class Card {
    constructor(suit, value, index, name) {
        this.suit = suit;
        this.value = value;
        this.name = value + ' of ' + suit;
        this.image = `img/` + index + `.png`;
    }
}

let card = new Card('Clubs', '2');

let playerHand = [];
let compHand = [];
// console.log(card)

class Deck {
    constructor() {
        this.deck = [];
    }

    createDeck(suits, values) {
        for(let suit of suits) {
            let i = 0;
            for(let value of values) {
                
                this.deck.push(new Card(suit, value, i))
                i++;
            }
        }
        return this.deck;
    }
    shuffle() {
        let counter = this.deck.length, temp, i;

        while(counter) {
            i = Math.floor(Math.random() * counter--); 
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp;
        }
        return this.deck;
    }

    divide() {
        for(let i = 0; i < this.deck.length; i++){
            if(i % 2 === 0){
                playerHand.push(deck.shuffle([i])); 
            } else {
                compHand.push(deck.shuffle([i])); 
            }
            // $('.playerCount').html('Player cards: ' + playerHand.length)
            // $('.computerCount').html('Opponent cards: ' + compHand.length)
            // $('.score').html('');
            // console.log(shuffledDeck[i])
        }
    }
}

let deck = new Deck();

console.log(deck.createDeck(suits, values))
