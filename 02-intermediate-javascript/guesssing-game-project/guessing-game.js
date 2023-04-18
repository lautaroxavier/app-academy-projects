const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 0;
let numAttempts = 5;

const checkGuess = (num) => {
    if(num > secretNumber){
        console.log("Too high.");
        return false;
    } else if (num < secretNumber){
        console.log("Too low.");
        return false;
    }
    console.log("Correct!");
    return true;
}

const askGuess = () => {
    rl.question("Enter a guess: ",(answer) => {
        let result = checkGuess(Number(answer));
        numAttempts--;
        if(result){
            console.log("You win!");
            rl.close();
        } else if (numAttempts === 0){
            console.log("You lose.");
            rl.close();
        } else {
            askGuess();
        }
    });
}

const randomInRange = (min, max) => {
    let randomNum = Math.random();
    return Math.floor(randomNum * (max - min + 1) + min);
}

const askRange = () => {
    rl.question("Enter a min number: ", (min) => {
        rl.question("Enter a max number: ",(max) => {
            console.log("I'm thinking of a number between " + min + " and " + max + "...");
            secretNumber = randomInRange(Number(min), Number(max));
            askGuess();
        });
    });
}

const askLimit = () => {
    rl.question("Enter the number of attempts: ", (attempts) => {
        numAttempts = Number(attempts);
        console.log("Number of attempts: " + numAttempts);
        askRange();
    });
}

askLimit();