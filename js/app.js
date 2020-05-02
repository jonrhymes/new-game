// console.log("I'm working!");
// console.log($);


///////////////////
// Global Variables

const global = {
    number: 5
}

/////////////
// Functions

const func = {
    giveMe: (num) => num
}


/////////////////
// Event Handlers

const handle = {
    click: () => console.log("hello")
}


////////////
// App Logic

console.log(func.giveMe(global.number))

