let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Do you want to draw another card?");
} else if (sum === 21) { 
    console.log("You got Blackjack! You win!");
} else { 
    console.log("You busted!");
}

