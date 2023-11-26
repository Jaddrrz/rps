let weapons = ["Rock", "Paper", "Scissors"]

let computerChoice;
let playerSelection;
let winner;
let wins = 0;
let losses = 0;
let draws = 0;

function getComputerChoice() {
    computerChoice = weapons[(Math.floor(Math.random() * weapons.length))].toLowerCase();
    return computerChoice
}

function getPlayerChoice() {
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    return playerSelection
}

function rpsRound() {
    getComputerChoice();
    getPlayerChoice();
    
    switch(playerSelection)  {
        case computerChoice:
            console.log("It's a Draw, you both chose the same")
            winner = "Draw";
            return winner;
           
    
        case "paper":
            if (computerChoice === "rock") {
                console.log("You won! Paper beats Rock.")
                winner = "Player";
                return winner
            } else {
                console.log("You lost! Scissors beat Paper.")
                winner = "Computer";
                return winner
            }
            
        
        case "rock":
            if (computerChoice === "scissors") {
                console.log("You won! Rock beats Scissors.")
                winner = "Player";
                return winner
            } else {
                console.log("You lost! Paper beats Rock.")
                winner = "Computer";
                return winner
            }
          
        case "scissors":
            if (computerChoice === "paper") {
                console.log("You won! Scissors beats Paper.")
                winner = "Player";
                return winner
            } else {
                console.log("You lost! Rock beats Scissors.")
                winner = "Computer";
                return winner
            }
    }

    
}

rpsRound();
console.log(winner)
if (winner === "Player") {
    wins++;
} else if (winner === "Computer") {
    losses++;
} else {
    draws++;
}
rpsRound();
console.log(winner)
if (winner === "Player") {
    wins++;
} else if (winner === "Computer") {
    losses++;
} else {
    draws++;
}
rpsRound();
console.log(winner)
if (winner === "Player") {
    wins++;
} else if (winner === "Computer") {
    losses++;
} else {
    draws++;
}
rpsRound();
console.log(winner)
if (winner === "Player") {
    wins++;
} else if (winner === "Computer") {
    losses++;
} else {
    draws++;
}
rpsRound();
console.log(winner)
if (winner === "Player") {
    wins++;
} else if (winner === "Computer") {
    losses++;
} else {
    draws++;
}

if (wins > losses) {
    console.log("You won the game. The score was " + wins + " to " + losses + ", with " + draws +" draws.")
} else if (wins < losses) {
    console.log("You lost the game. The score was " + wins + " to " + losses + ", with " + draws +" draws.")
} else {
    console.log("Somehow nobody has won")
}
    









