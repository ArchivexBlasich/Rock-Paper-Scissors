function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            console.log("rock");
            break;

        case 1:
            console.log("paper");
            break;
    
        case 2:
            console.log("scissors");
            break;

        default:
            break;
    }
}

getComputerChoice();