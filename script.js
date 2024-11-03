function getComputerChoice() {
    // Generate random number between (and including) 1 & 3
    let randomInt = Math.random();
    randomInt = parseInt(randomInt * 3) + 1;
    // Declare choice, assign each number to a choice
    let choice;

    if (randomInt === 1) {
        choice = "rock";
    }
    if (randomInt === 2) {
        choice = "paper";
    }
    if (randomInt === 3) {
        choice = "scissors";
    }
    // return the computer choice!
    return choice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    
    if (humanChoice.toLowerCase() === "rock") {
        return "rock";
    } 
    else if (humanChoice.toLowerCase() === "paper") {
        return "paper";
    } 
    else if (humanChoice.toLowerCase() === "scissors") {
        return "scissors";
    } 
    else {
        console.log("invalid choice");
        return getHumanChoice();
    }
}
