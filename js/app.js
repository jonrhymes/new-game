// console.log("I'm working!");
// console.log($);


///////////////////
// Global Variables

const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

class Card {
    constructor(suits, values) {
        this.suits = suits;
        this.values = values;
    }
}

console.log(Card.suits)

/////////////
// Functions

const func = {
    giveMe: (x) => x,
}


/////////////////
// Event Handlers

const handle = {
    click: () => console.log("hello")
}


////////////
// App Logic

// console.log(func.giveMe(suits))

