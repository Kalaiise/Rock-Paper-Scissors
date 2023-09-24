let playerScore = 0
let compScore = 0
let gameResult = document.querySelector('.gameResult');


const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
const p = document.createElement('p');
const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorButton = document.querySelector('.scissorButton');

const computerChoice = () => {
const choices = ["rock", "paper", "scissors"];
const random = (Math.floor(Math.random() * choices.length));
const randomChoices = choices[random];
    return randomChoices;
};



const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        p.innerText = "Tie..."
        gameResult.appendChild(p)

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        p.innerText = "You win! Rock smashes Scissors."
        gameResult.appendChild(p)
        
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++
        p.innerText = "You lose! Paper covers Rock."
        gameResult.appendChild(p) 
        
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        p.innerText = "You win! Paper covers Rock."
        gameResult.appendChild(p) 

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++
        p.innerText = "You lose! Scissors cuts Paper."
        gameResult.appendChild(p) 
        
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++
        p.innerText = "You lose! Rock smashes Scissors."
        gameResult.appendChild(p) 
        
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        p.innerText = "You win! Scissors cuts Paper."
        gameResult.appendChild(p) 
    };
};

const updateScore = (playerScore, compScore) => {
    score1.innerText = `Player Score: ${playerScore}`;
    score2.innerText = `Computer Score: ${compScore}`;
}; 

const alertWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        alert("Nice! You wrecked the CPU.");
    } else if (compScore === 5) {
         alert("The robots have won...better luck next time...");
    }
};

rockButton.addEventListener('click', () =>  {
    const playerSelection = 'rock';
    playRound(playerSelection, computerChoice())
    updateScore(playerScore, compScore);
    alertWinner(playerScore, compScore);
});

scissorButton.addEventListener('click', () =>  {
    const playerSelection = 'scissors';
    playRound(playerSelection, computerChoice())
    updateScore(playerScore, compScore);
    alertWinner(playerScore, compScore);     
 });

 paperButton.addEventListener('click', () =>  {
    const playerSelection = 'paper';
    playRound(playerSelection, computerChoice())
    updateScore(playerScore, compScore);
    alertWinner(playerScore, compScore);     
});