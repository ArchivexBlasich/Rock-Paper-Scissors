function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1:
            return "rock";
            break;

        case 2:
            return "paper";
            break;
    
        case 3:
            return "scissors";
            break;

        default:
            break;
    }
}

function getHumanChoice() {
    let humanChoice = Number(prompt(`
        1- Rock
        2- Paper
        3- Scissors
    `));

    switch (humanChoice) {
        case 1:
            return "rock";
            break;

        case 2:
            return "paper";
            break;
    
        case 3:
            return "scissors";
            break;

        default:
            break;
    }
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`Draw! ${computerChoice} equals ${humanChoice}`);
    } else if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
    } else {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`
    Computer Score: ${computerScore}
    Human Score: ${humanScore}

    `);

    console.log("The Winner is: ");
    (computerScore > humanScore) ? console.log("Computer") : console.log("Human");
}

/*--------------------------------- main ----------------------------------*/

let computerScore = 0;
let humanScore = 0;

playGame();