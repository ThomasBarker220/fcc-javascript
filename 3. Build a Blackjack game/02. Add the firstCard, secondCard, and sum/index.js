// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11


function getRandomInt(min, max) {
    let randInt = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randInt);
    return randInt;
}

let firstCard = getRandomInt(2, 11);
let secondCard = getRandomInt(2, 11);

// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard;
console.log(sum);