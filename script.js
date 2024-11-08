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

let humanScore = 0;
let computerScore = 0;

// get the rock, paper and scissors button elements
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Result containers
const resultContainer = document.createElement("div");
const humanChoiceDisplay = document.createElement("p");
const computerChoiceDisplay = document.createElement("p");
const roundResultDisplay = document.createElement("p");
const scoreDisplay = document.createElement("div");
const humanScoreDisplay = document.createElement("div");
const computerScoreDisplay = document.createElement("div");


humanChoiceDisplay.textContent = "Human Choice: ";
computerChoiceDisplay.textContent = "Computer Choice: ";
roundResultDisplay.textContent = "Result: ";
humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

scoreDisplay.appendChild(humanScoreDisplay);
scoreDisplay.appendChild(computerScoreDisplay);

resultContainer.appendChild(humanChoiceDisplay);
resultContainer.appendChild(computerChoiceDisplay);
resultContainer.appendChild(roundResultDisplay);
resultContainer.appendChild(scoreDisplay);

document.body.appendChild(resultContainer);

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



rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));