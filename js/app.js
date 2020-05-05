// console.log("I'm working!");
// console.log($);

// ==========> 
// Sources: 
// 1. "Building a deck of cards in Javascript" by Adam Coder, https://www.youtube.com/watch?v=h3ehO5QMNu4 

// 2. Game adapated from Tyler Roland's War, https://github.com/MisterTeeRoland/war

// ===========>

///////////////////
// Global Variables

// ====> instantiate variables 

const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

const images = ['img/0.png', 'img/1.png', 'img/2.png'];
// const images = [];
// console.log(images[0])

// =====> attach img to class

images.forEach((element) => {
    console.log(element)
    element++;
})

// // let i = 0;

// for(let i = 0; i < images.length; i++){
//     // console.log(images[i])
//     let val = images[i];
// }


// ====> create Card class
class Card {
    constructor(suit, value, name, element) {
        this.suit = suit;
        this.value = value;
        this.name = value + ' of ' + suit;
        this.image = `${images}`;
    }
}

// let card = new Card('Diamonds', '2');
// console.log(card);
// let card2 = new Card('Diamonds', '3');
// console.log(card2);
// console.log(card.image)

// =====> create Deck class

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

    // shuffle() {
    //     let counter = this.deck.length, temp, i;

    //     while(counter) {
    //         i = Math.floor(Math.random() * counter--); 
    //         temp = this.deck[counter];
    //         this.deck[counter] = this.deck[i];
    //         this.deck[i] = temp;

// ======> 
// Flip indices

// let arr = [1, 2]; // arr equals [1, 2]
// let temp = arr[0]; // temp equals 1
// arr[0] = arr[1]; // sets arr[0] to 2. arr = [2, 2]
// arr[1] = temp; // sets arr[1] to 1. now arr = [2, 1]

// ======>

        // }
        // return this.deck;
    // }
}

let deck = new Deck();
// console.log(deck);
deck.createDeck(suits,values);

// console.log(deck.createDeck(suits, values));

let shuffledDeck = deck.shuffle();

console.log(shuffledDeck);
// console.log(shuffledDeck.length)

// =============> 
// Split the deck and populate Player and Computer Hands

playerHand = [];
compHand = [];

// console.log(playerHand.push(shuffledDeck[0]))
// playerHand.push(shuffledDeck[2])
// playerHand.push(shuffledDeck[4])
// console.log(playerHand)

const divide = (shuffledDeck) => {
    for(let i = 0; i < shuffledDeck.length; i++){
        if(i % 2 === 0){
            playerHand.push(shuffledDeck[i]); 
        } else {
            compHand.push(shuffledDeck[i]); 
        }
        $('.playerCount').html('Player cards: ' + playerHand.length)
        $('.computerCount').html('Opponent cards: ' + compHand.length)
        $('.score').html('');
        // console.log(shuffledDeck[i])
    }
}

divide(shuffledDeck)

console.log(playerHand)
console.log(compHand)


// =============> 
// Take one card off the top of the pile

playerCard = '';
compCard = '';

const draw = () => {
    let playerCard = playerHand[0];
    let compCard = compHand[0];

    playerCard = playerHand.shift();
    console.log(playerCard)
}

// draw(playerHand)
console.log(playerCard)

const checkWin = () => {
    if(playerHand.length === 0) {
        $('.score').html('Opponent wins!');
        $('.playerDeck').html('');
    } else if(compHand.length === 0) {
        $('.score').html('Player wins!')
    }
}



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

