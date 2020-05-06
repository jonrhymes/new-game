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
// const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];


const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

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
    constructor(suit, value, index, name) {
        this.suit = suit;
        this.value = value;
        this.name = value + ' of ' + suit;
        this.image = `img/` + index + `.png`;

    }
}

let card = new Card('Clubs', '2', scr="img/0.png");

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
        let i = 0; 
        // declared i=0 to cycle through the suits first, then the values, but continue counting up the index of pngs. The way I structured the pngs was from Clubs, to Diamonds, Hearts, then Spades.
        for(let suit of suits) {
            for(let value of values) { 
                // console.log(suit, value, i);
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

// ======> 
// Flip indices

// let arr = [1, 2]; // arr equals [1, 2]
// let temp = arr[0]; // temp equals 1
// arr[0] = arr[1]; // sets arr[0] to 2. arr = [2, 2]
// arr[1] = temp; // sets arr[1] to 1. now arr = [2, 1]

// ======>

    }
}

const deck = new Deck();

// ======> 
// Make a new Deck

deck.createDeck(suits, values);

// ======> 
// Shuffle new deck

const shuffledDeck = deck.shuffle();
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
// Announce winner

const checkWin = () => {
    if(playerHand.length === 0) {
        $('.score').html('Opponent wins!');
        $('.playerDeck').html('');
    } else if(compHand.length === 0) {
        $('.score').html('Player wins!')
    }
}

// =============>
// Update cards

const updateCount = () => {
	$('.playerCount').html("Player cards: " + playerHand.length);
	$('.computerCount').html("Opponent cards: " + compHand.length);
}


// =============> 
// Take one card off the top of the pile, compare it, then put it in a deck

// console.log(playerHand[0].value)
// console.log(compHand[0].value)

// console.log(playerHand[0])
// console.log(playerHand.shift())
// console.log(compHand.push(playerHand[0]))
// console.log(compHand)
// playerHand.shift()
// console.log(playerHand)

const play = () => {
    if(playerHand[0].value < compHand[0].value){
        $('.score').html('Opponent wins!');
        compHand.push(playerHand[0]);
        playerHand.shift();
    }else if(playerHand[0].value > compHand[0].value){
        $('.score').html('Player wins!');
        playerHand.push(compHand[0]);
        compHand.shift();
    }else{
        $('.score').html('It\'s a tie!');
    }
    checkWin();
    updateCount();
}

console.log(playerHand)
console.log(compHand)

// play();




// let playerCard = playerHand.shift();
// console.log(playerCard.value + 'player')
// let compCard = compHand.shift();
// console.log(compCard.value + 'computer')

// const compare = () => {
//     playerCard = playerHand.shift();
//     console.log(playerCard);
//     console.log(playerCard.value + 'player');
//     compCard = compHand.shift();
//     console.log(compCard);
//     console.log(compCard.value + 'comp');
// }


// const play = (value) => {
//     let playerCard = playerHand.shift();
//     console.log(playerHand.value, compHand.value)
//     let compCard = compHand.shift();
//     if(playerCard.value === compCard.value){
//         console.log('tie');
//         $('.score').html(`It's a tie!`);
//         // playerHand.push(playerCard);
//         // compHand.push(compCard);
//     }else if(playerCard.value > compCard.value){
//         console.log('player wins');
//     }
    // if(playerCard.value > compCard.value){
    //     $('.score').html('Player wins!');
    //     console.log('player wins')
    //     playerHand.push(playerCard);
    //     playerHand.push(compCard);
    //     console.log(playerHand);
    //     console.log(compHand);
    // }else if(playerCard.value < compCard.value){
    //     $('.score').html('Opponent wins!');
    //     console.log('comp wins!');
    //     compHand.push(playerCard);
    //     compHand.push(compCard);
    //     console.log(playerHand);
    //     console.log(compHand);
    // }else{
    // $('.score').html('It\'s a tie!');
    // console.log('tie!')
    // playerHand.push(playerCard);
    // compHand.push(compCard);
    // console.log(playerHand);
    // console.log(compHand);
    // }
//     checkWin();
//     updateCount();
// }

// play();

// console.log(playerHand)
// console.log(compHand)

// console.log(play(playerHand))
// console.log(play(playerHand))





/////////////////
// Event Handlers



////////////
// App Logic

const $button = $('.btn');
const $playerDeck = $('.playerDeck')
const $compDeck = $('.compDeck')
// const $img1 = $('<img>')

$button.on('click', () => {
    play(playerHand);
    // $playerDeck.append($('<img class="front-card">').attr('src','img/0.png'))
})

// $button.on('click', () => {
//     $compDeck.prepend($('<img class="front-card">').attr('src','img/31.png'))
// })

