let playerScore = 0
let compScore = 0

function getComputerChoice() {
const choices = ["rock", "paper", "scissors"];
const random = (Math.floor(Math.random() * choices.length));
const randomChoices = choices[random];
    return randomChoices;
}



function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "Tie"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "You win! Rock smashes scissors."
        
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++
        return "You lose! Paper covers rock."
        
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You win! Paper covers rock."

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++
        return "You lose! Scissors cuts paper."
        
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++
        return "You lose! Rock smashes scissors."
        
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You win! Scissors cuts paper."
        
    };
};
 

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Lets play a game.. Choose Rock, Paper, or Scissors...").toLowerCase()
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection))
    };
     
   if (playerScore > compScore) {
        return "Nice! You wrecked the CPU.";
    } else if (compScore > playerScore) {
        return "You win some and you lose some...better luck next time...";
    } else {
        return "You tied with the CPU";
    };
};

alert(game());