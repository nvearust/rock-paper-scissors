function getComputerChoice() {
    // Generate random number between (and including) 1 & 3.
    let randomInt = Math.random();
    randomInt = parseInt(randomInt * 3) + 1;
    // Declare choice, assign each number to a choice.
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

// get the rock, paper and scissors button elements.
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Result containers.
const resultContainer = document.createElement("div");
const humanChoiceDisplay = document.createElement("p");
const computerChoiceDisplay = document.createElement("p");
const roundResultDisplay = document.createElement("p");
const scoreDisplay = document.createElement("div");
const humanScoreDisplay = document.createElement("div");
const computerScoreDisplay = document.createElement("div");

// append to body.
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

// play round functionality.
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    humanChoiceDisplay.textContent = `Human Choice: ${humanChoice}`;
    computerChoiceDisplay.textContent = `Computer Choice: ${computerChoice}`;

    if (computerChoice === humanChoice) {
        roundResultDisplay.textContent = "Result: It's a tie!";
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        roundResultDisplay.textContent = "Result: Computer won the round!";
        computerScore++;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    } else {
        roundResultDisplay.textContent = "Result: Human won the round!";
        humanScore++;
        humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
    }

    if (humanScore === 5) {
        alert("Human wins the game! Starting a new round.");
        resetGame();
    }
    else if (computerScore === 5) {
            alert("Computer wins the game! Starting a new round.");
            resetGame();
    }
}

// reset game functionality.
function resetGame() {
    // Reset scores.
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    roundResultDisplay.textContent = "Result: ";
}

// event listeners to initiate start of game.
rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));