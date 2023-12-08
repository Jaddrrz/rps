let weapons = ["Rock", "Paper", "Scissors"]

let computerSelection;
let playerSelection;
let winner;
let wins = 0;
let losses = 0;
let draws = 0;

const scores = document.querySelector("#scores")
const result = document.createElement("p")
scores.appendChild(result)

function getComputerChoice() {
    computerSelection = weapons[(Math.floor(Math.random() * weapons.length))].toLowerCase();
    return computerSelection
}

function rpsRound() {
    getComputerChoice();
    
    switch(playerSelection)  {
        case computerSelection:
            console.log("It's a Draw, you both chose " + playerSelection)
            winner = "Draw"
            return winner
           
        case "paper":
            if (computerSelection === "rock") {
                console.log("You won! Paper beats Rock.")
                winner = "Player";
                return winner
            } else {
                console.log("You lost! Scissors beat Paper.")
                winner = "Computer";
                return winner
            }
            
        
        case "rock":
            if (computerSelection === "scissors") {
                console.log("You won! Rock beats Scissors.")
                winner = "Player";
                return winner
            } else {
                console.log("You lost! Paper beats Rock.")
                winner = "Computer";
                return winner
            }
          
        case "scissors":
            if (computerSelection === "paper") {
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

const carta = document.querySelector("#paper");
carta.addEventListener("click", () => {
    playerSelection = "paper"
    rpsRound()
    if (winner === "Player") {
        wins++
    } else if (winner === "Computer") {
        ++losses
    } else {
        ++draws
    }
    const winScore = document.querySelector("#win")
    const lossScore = document.querySelector("#loss")
    const drawScore = document.querySelector("#draw")

    winScore.textContent = wins
    lossScore.textContent = losses
    drawScore.textContent = draws

    if ((wins === 5) && (wins > losses)) {
        result.textContent = "You won!"
    } else if ((losses === 5) && (losses > wins)) {
        result.textContent = "You lost!"
    } 
    
});

const forbici = document.querySelector("#scissors")
forbici.addEventListener("click", () => {
    playerSelection = "scissors"
    rpsRound()
    if (winner === "Player") {
        ++wins
    } else if (winner === "Computer") {
        ++losses
    } else {
        ++draws
    }
    const winScore = document.querySelector("#win")
    const lossScore = document.querySelector("#loss")
    const drawScore = document.querySelector("#draw")

    winScore.textContent = wins
    lossScore.textContent = losses
    drawScore.textContent = draws

    if ((wins === 5) && (wins > losses)) {
        result.textContent = "You won!"
    } else if ((losses === 5) && (losses > wins)) {
        result.textContent = "You lost!"
    } 
    
})

const sasso = document.querySelector("#rock")
sasso.addEventListener("click", () => {
    playerSelection = "rock"
    rpsRound()
    if (winner === "Player") {
        ++wins
    } else if (winner === "Computer") {
        ++losses
    } else {
        ++draws
    }
    const winScore = document.querySelector("#win")
    const lossScore = document.querySelector("#loss")
    const drawScore = document.querySelector("#draw")

    winScore.textContent = wins
    lossScore.textContent = losses
    drawScore.textContent = draws

    if ((wins === 5) && (wins > losses)) {
        result.textContent = "You won!"
    } else if ((losses === 5) && (losses > wins)) {
        result.textContent = "You lost!"
    } 
    
})








// if (wins > losses) {
//     console.log("You won the game. The score was " + wins + " to " + losses + ", with " + draws +" draws.")
// } else if (wins < losses) {
//     console.log("You lost the game. The score was " + wins + " to " + losses + ", with " + draws +" draws.")
// } else {
//     console.log("Somehow nobody has won")
// }
    









