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

// const images = ['img/0.png', 'img/1.png', 'img/2.png'];
// const images = [];
// console.log(images[0])

// =====> attach img to class

// images.forEach((element) => {
//     console.log(element)
//     element++;
// })

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
        // Attaches images to Class. I declared i=0 to cycle through the suits first, then the values and also continue to count up the index of pngs so that it tracks with the way I structured the pngs: Clubs from 2 to Ace, then Diamonds, Hearts and Spades.
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

const deck = new Deck ();

// ======> 
// Make a new Deck, shuffle

deck.createDeck(suits, values);

// ======> 
// Shuffle new deck, reassign a variable

const shuffledDeck = deck.shuffle();
// console.log(shuffledDeck);
// console.log(shuffledDeck.length)

// ======> 
// Set empty arrays

playerHand = [];
compHand = [];

// console.log(playerHand.push(shuffledDeck[0]))
// playerHand.push(shuffledDeck[2])
// playerHand.push(shuffledDeck[4])
// console.log(playerHand)

// ======> 
// Created a function to divide deck and deal Player and Computer hands

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

// ======> 
// Invoked divide function to split deck evenly

divide(shuffledDeck);

console.log(playerHand);
console.log(compHand);

// ======> 
// Announce winner

const checkWin = () => {
    if(playerHand.length === 0) {
        $('.score').html('Opponent beat Player! GAME OVER');
        $('.playerDeck').html('');
    } else if(compHand.length === 0) {
        $('.score').html('Player beat Opponent! GAME OVER')
    }
}

// ======> 
// Update card lengths to keep track of who is winning

const updateCount = () => {
	$('.playerCount').html("Player cards: " + playerHand.length);
	$('.computerCount').html("Opponent cards: " + compHand.length);
}

// ======> 
// Take one card off the top of the pile, compare it, then put it in the winner's deck

const compCard = compHand[0];
// console.log(compCard);
// console.log(compCard.value);
const playerCard = playerHand[0];
// console.log(playerCard);
// console.log(playerCard.value);

const play = () => {
    // ======>
    // empty both divs or make a 
    // ======> 
    // sets the current card to be evaluated as the top card in each hand
    let compCard = compHand[0];
    console.log(compCard);
    console.log(compCard.value);
    let playerCard = playerHand[0];
    console.log(playerCard);
    console.log(playerCard.value);

    // ======> 
    // compares the values of the respective current card   
    if(playerCard.value > compCard.value){

        // ======> 
        // takes the current card and pushes it to the back of the deck
        playerHand.push(compCard);
        playerHand.push(playerCard);

        // ======> 
        // removes top card from computer hand so that the next card resets compHand[0]
        compHand.shift();

        // ======> 
        // removes top card from player hand
        playerHand.shift();

        console.log('player wins');

        // ======> 
        // resets score
        $('.score').html('Player wins!');
        console.log(playerHand)
        console.log(compHand)
    
    // ======> 
    // compares the values of the respective current card   

    }else if(compCard.value > playerCard.value){
    
        // ======> 
        // takes the current card and pushes it to the back of the deck
        compHand.push(playerCard);
        compHand.push(compCard);

        // ======> 
        // removes top card from player hand so that the next card resets playerHand[0]
        playerHand.shift();

        // ======> 
        // removes top card from player hand
        compHand.shift();

        // ======> 
        // resets score
        $('.score').html('Opponent wins!');
        console.log('comp wins');
        console.log(compHand);
        console.log(playerHand)

    }else{
        // ======>
        // if there's a tie

        playerHand.push(playerCard);
        compHand.push(compCard);

        playerHand.shift();
        compHand.shift();
        $('.score').html(`It's a tie!`);
        console.log('tie')
    }
    checkWin();
    updateCount();
}

/////////////////
// Event Handlers

const $button = $('.btn');
const $playerDeck = $('.playerDeck')
const $compDeck = $('.compDeck')
const $playerCard = $('.player-card')
const $compCard = $('.comp-card')

// const $img1 = $('<img>')


// const emptyDivs = () => {
//     $('.player-card').setTimeout($playerCard.empty(), 1000);
//     $('.comp-card').setTimeout($compCard.empty(), 1000);
// }


$button.on('click', () => {
    $playerCard.html($('<img class="front-card">').attr('src',`${playerHand[0].image}`));
    $compCard.html($('<img class="front-card">').attr('src',`${compHand[0].image}`));
    play();
    // $playerCard.show();
    // $compCard.show();
    // setTimeout(() => {
    //     $playerCard.empty();
    //     $compCard.empty();
    // }, 5000);
})














// $button.on('click', emptyDivs());

// $playerCard.hide('slow').delay('2000');
// $compCard.hide('slow').delay('2000');








// console.log(playerHand)
// console.log(compHand)


// console.log(compHand[0])
// console.log(compHand[0].value)

// const draw = () => {
//     let compCard = compHand[0];
//     let playerCard = playerHand[0];
// }

// const play = (player, computer) => {
//     let playerCard = playerHand[0];
//     let compCard = compHand[0];
   
//     if(playerHand[0].value > compHand[0].value){
//         console.log('playercard ' + playerCard.playerHand)
//         console.log(playerCard.value)
//         console.log('compcard' + compCard)
//         console.log(compCard.value)
//         // if player value is greater, take the card out of comp hand
//         compHand.shift();
//         // and push the card to player's hand
//         playerHand.push(compCard);
//         console.log(compCard);
//         console.log(playerHand);



    // }else if(playerHand[0].value < compHand[0].value){
    //     console.log(compHand[0])
    //     console.log(compHand[0].value)
    //     compHand.shift();
    //     playerHand.push(compHand[0]);
    //     console.log(compHand)



//     }
// }

// const play = () => {
//     if(playerHand[0].value < compHand[0].value){
//         $('.score').html('Opponent wins!');
//         compHand.push(playerHand[0]);
//         playerHand.shift();
//     }else if(playerHand[0].value > compHand[0].value){
//         $('.score').html('Player wins!');
//         playerHand.push(compHand[0]);
//         compHand.shift();
//     }else{
//         $('.score').html('It\'s a tie!');
//     }
//     checkWin();
//     updateCount();
// }

// console.log(playerHand)
// console.log(compHand)

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

// const $button = $('.btn');
// const $playerDeck = $('.playerDeck')
// const $compDeck = $('.compDeck')
// const $playerCard = $('.player-card')
// const $compCard = $('.comp-card')

// // const $img1 = $('<img>')

// $button.on('click', () => {
//     play();
//     $playerCard.append($('<img class="front-card">').attr('src',`${playerHand[0].image}`));
//     $compCard.append($('<img class="front-card">').attr('src',`${compHand[0].image}`));
// })


////////////
// App Logic