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

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log(`Human chooses: ${humanChoice}`);
    console.log(`Computer chooses: ${computerChoice}`);

    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
        return 0;
    }

    if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log("Computer won the round!");
        computerScore++;
    } else {
        console.log("Human won the round!");
        humanScore++;
    }

    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}



function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (computerScore > humanScore) {
        console.log("Computer won the game!");
    }
    else {
        console.log("Human won the game!");
    }
}

playGame()