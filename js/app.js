// console.log("I'm working!");
// console.log($);


///////////////////
// Global Variables

// ==========> 
// "Building a deck of cards in Javascript"
// by Adam Coder
// https://www.youtube.com/watch?v=h3ehO5QMNu4 
// ===========>

const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const images = [
    '/Users/debbo/Desktop/new_game/img/Final Cards/2s/2-CLUBS.png',
    '/Users/debbo/Desktop/new_game/img/Final Cards/2s/2-DIAMONDS.png'
];




// Card class
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.name = value + ' of ' + suit;
    }
}

let card = new Card('2','Diamonds');

/////////////
// Functions

// Deck class
class Deck {
    constructor() {
        this.deck = [];
    }

    createDeck(suits, values) {
        for(let suit of suits) {
            for(let value of values) {
                this.deck.push(new Card(suit, value));
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

// ======> 
// Flip indices

// let arr = [1, 2]; // arr equals [1, 2]
// let temp = arr[0]; // temp equals 1
// arr[0] = arr[1]; // sets arr[0] to 2. arr = [2, 2]
// arr[1] = temp; // sets arr[1] to 1. now arr = [2, 1]

// ======>

        }
        return this.deck;
    }

    deal () {
        let hand = [];
        while(hand.length < 26) {
            hand.push(this.deck.shift());

        } 
        // ^ Takes 11 cards from the bottom of the deck
        return hand;

    }

    
}

let deck = new Deck();
deck.createDeck(suits, values);

console.log(deck);
// console.log(deck.createDeck(suits, values))
console.log(deck.shuffle());
console.log(deck.deal());




/////////////////
// Event Handlers

// const handle = {
//     click: () => console.log("hello"),
//     addCard: () => {

//     }
// }

// const addCard = () => {
//     const $img = $('<img>');
//     $img.attr('src', randomCard());
//     $body.append($img)
// };

const imager = {
    click: () => {
        let $img = $('<img>');
        $img.attr('src', )
    }
}


////////////
// App Logic


