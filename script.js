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

function playRound(humanChoice, computerChoice) {
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

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors")
const resultDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score-board")

function handleChoice(event) {
    const humanSelection = event.target.id;
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection,computerSelection);

    resultDiv.textContent = `Human: ${humanSelection} | Computer: ${computerSelection} | Winner: ${result}`;
    scoreDiv.textContent= (`Scores- human: ${humanScore} | computer: ${computerScore}`);

    if (humanScore === 5 || computerScore === 5) {

        if (humanScore === 5) {
            alert("Congratulations! You beat the machine!")
        } 
        else{
            alert("Game Over! The computer won.")
        }

        humanScore = 0;
        computerScore = 0;

        scoreDiv.textContent = `Scores- human: 0 | computer: 0`;
        resultDiv.textContent = "New game started!";
        
    }

}

rockButton.addEventListener("click", handleChoice);
paperButton.addEventListener("click",handleChoice);
scissorsButton.addEventListener("click",handleChoice);












