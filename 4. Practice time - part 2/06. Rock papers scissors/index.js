let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


function randomHand() {
    let numHands = hands.length;
    let randNum = Math.floor(Math.random() * numHands);
    return hands[randNum];
}

console.log(randomHand());