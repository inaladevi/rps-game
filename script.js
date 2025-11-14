function playGame() {

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
		return "rock";
	}
    else if (randomNumber === 1) {
		return "paper";
	}
	else  {
		return "scissors";
	}
}

function getHumanChoice() {
	let choice = prompt("Rock, Paper, or Scissors ?");

    if (choice === null) return null;

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }

    else {
        console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === null) {
        console.log("Round cancelled by user.");
        return "aborted";
    }

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return "tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
        return "human";
    } 
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
        return "computer";
    }
}

const totalRounds = 5;

for (let round = 1; round <= totalRounds; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);

    if (result === "aborted") {
        console.log("Game aborted by user.");
        break;
    }

    console.log(`Round ${round}|Winner: ${result}|CurrentScore - Human: ${humanScore}, Computer: ${computerScore}`);
}

    console.log(`Final score: Human ${humanScore} | Computer ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Human wins!");
    } else if (computerScore > humanScore) {
        console.log("Human lose :(");
    } else {
        console.log("It's a tie!");
    }

}

