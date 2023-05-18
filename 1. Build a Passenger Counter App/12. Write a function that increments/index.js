let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function increment() {
    lapsCompleted += 1;
}

for(let i = 0; i < 3; i++) {
    increment();
}



console.log(lapsCompleted)