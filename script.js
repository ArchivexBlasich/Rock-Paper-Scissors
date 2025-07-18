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

console.log(getComputerChoice());

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

console.log(getHumanChoice());