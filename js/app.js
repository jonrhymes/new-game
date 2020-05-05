// console.log("I'm working!");
// console.log($);

// ==========> 
// Sources: 
// 1. "Building a deck of cards in Javascript" by Adam Coder, https://www.youtube.com/watch?v=h3ehO5QMNu4 

// 2. Game adapated from Tyler Roland's War, https://github.com/MisterTeeRoland/war

// ===========>

///////////////////
// Global Variables

// Declares empty strings and arrays
let playerDeck = '';
let compDeck = '';
let playerCard = '';
let compCard = '';
let playerHand = [];
let compHand = [];

const deck = [
    {name: '2 of Clubs', img: 
]


// const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
// const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];


// // Card class
// class Card {
//     constructor(suit, value) {
//         this.suit = suit;
//         this.value = value;
//         this.name = value + ' of ' + suit;

//     }
// }

// let card = new Card('2','Diamonds');


// /////////////
// // Functions

// // Deck class
// class Deck {
//     constructor() {
//         this.deck = [];
//     }

//     createDeck(suits, values) {
//         for(let suit of suits) {
//             for(let value of values) {
//                 this.deck.push(new Card(suit, value));
//             }
//         }
//         return this.deck;
//     }
//     shuffle() {
//         let counter = this.deck.length, temp, i;

//         while(counter) {
//             i = Math.floor(Math.random() * counter--); 
//             temp = this.deck[counter];
//             this.deck[counter] = this.deck[i];
//             this.deck[i] = temp;

// // ======> 
// // Flip indices

// // let arr = [1, 2]; // arr equals [1, 2]
// // let temp = arr[0]; // temp equals 1
// // arr[0] = arr[1]; // sets arr[0] to 2. arr = [2, 2]
// // arr[1] = temp; // sets arr[1] to 1. now arr = [2, 1]

// // ======>

//         }
//         return this.deck;
//     }

//     deal () {
//         let hand = [];
//         while(hand.length < 26) {
//             hand.push(this.deck.shift());

//         } 
//         // ^ Takes 26 cards from the bottom of the deck
//         return hand;

//     }

    
// }

// let deck = new Deck();
// deck.createDeck(suits, values);

// console.log(deck);
// // console.log(deck.createDeck(suits, values))
// console.log(deck.shuffle());
// console.log(deck.deal());




/////////////////
// Event Handlers



////////////
// App Logic

const $button = $('.btn');
const $playerDeck = $('.playerDeck')
const $compDeck = $('.compDeck')
// const $img1 = $('<img>')

$button.on('click', () => {
    $playerDeck.append($('<img class="front-card">').attr('src','img/0.png'))
})

$button.on('click', () => {
    $compDeck.prepend($('<img class="front-card">').attr('src','img/31.png'))
})

