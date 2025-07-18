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

/*--------------------------------- main ----------------------------------*/

function main() {
    let computerScore = 0;
    let humanScore = 0;
}

main();