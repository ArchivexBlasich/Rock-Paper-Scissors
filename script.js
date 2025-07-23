/*-------------------------- Global variables ------------------------------ */
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

/* ------------------- Functions definitions -------------------------------*/

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1:
            return ROCK;
            break;

        case 2:
            return PAPER;
            break;
    
        case 3:
            return SCISSORS;
            break;

        default:
            break;
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "tie";
    } else if ((humanChoice === ROCK && computerChoice === PAPER)
        || (humanChoice === PAPER && computerChoice === SCISSORS)
        || (humanChoice === SCISSORS && computerChoice === ROCK)) {
            computerScore++;
            return "computer";
    } else {
        humanScore++;
        return "human";
    }
}

/*--------------------------------- Events Handlers ---------------------- */

function handButtonClick(e) {
    let playWinner;
    const buttonClass = e.target.className;
    const humanDisplay = document.querySelector(".human-result");
    const computerDisplay = document.querySelector(".computer-result");

    switch (buttonClass) {
        case "rock":
            playWinner = playRound(ROCK, getComputerChoice());
            e.target.setAttribute("style", "background: black;");
            break;
        case "paper":
            playWinner = playRound(PAPER, getComputerChoice());
            e.target.setAttribute("style", "background: black;");
            break;
        case "scissors":
            playWinner = playRound(SCISSORS, getComputerChoice());
            e.target.setAttribute("style", "background: black;");
            break;
    
        default:
            break;
    }

    if (playWinner === "tie") {
        humanDisplay.setAttribute("style", "background: yellow;");
        computerDisplay.setAttribute("style", "background: yellow;");
    } else if (playWinner == "computer") {
        humanDisplay.setAttribute("style", "background: red;");
        computerDisplay.setAttribute("style", "background: green;");
    } else {
        humanDisplay.setAttribute("style", "background: green;");
        computerDisplay.setAttribute("style", "background: red;");
    }

    humanDisplay.textContent = humanScore;
    computerDisplay.textContent = computerScore;

    if (humanScore === 5 || computerScore === 5) {
        const body = document.querySelector("body");

        if (humanScore === 5) body.setAttribute("style", "background: green;");
        else body.setAttribute("style", "background: red;");

        this.removeEventListener("click", setButtonBackground);
        this.removeEventListener("click", handButtonClick);
    }
}   

function setButtonBackground(e) {
    const btns = document.querySelectorAll("button");

    btns.forEach(btn => {
        btn.setAttribute("style", "background-color: rgb(253, 255, 254);")
    });
}

/*--------------------------------- main ----------------------------------*/

// select the bottoms from the DOM
const buttons = document.querySelector(".options-to-select");

buttons.addEventListener("click", setButtonBackground);
buttons.addEventListener("click", handButtonClick);

let computerScore = 0;
let humanScore = 0;
