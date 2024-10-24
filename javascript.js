const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

let humanChoice = 'man';
let comChoice = '';
let playerScore = 0;
let computerScore = 0;
let outcome = '';
const playerSource = document.getElementById("player-score");
const computerSource = document.getElementById("computer-score");

function getComputerChoice(){
    let choice;
    let randNumber = Math.floor(Math.random() * 100) + 1;
    if(randNumber < 33){
        choice = "rock";
    } else if(randNumber < 66 && randNumber > 33){
        choice = "paper";
    } else if(randNumber > 66){
        choice = "scissors";
    }

    return choice;
}



function playRound(playerChoice, computerChoice){
    let outcome = '';
    if(computerChoice === playerChoice){
        outcome = "Its a tie!";
        let newDiv = document.createElement("div")
        newDiv.textContent = outcome;
        newDiv.style.textAlign = "center";
        document.getElementsByTagName("body")[0].appendChild(newDiv);
        return outcome;
    } else if(computerChoice === "rock" && playerChoice === "paper"){
        outcome = "You Win!";
        playerScore++;
        playerSource.textContent = "Player Score: " + playerScore;
        let newDiv = document.createElement("div")
        newDiv.textContent = outcome;
        newDiv.style.textAlign = "center";
        document.getElementsByTagName("body")[0].appendChild(newDiv);
        return outcome;
    } else if(computerChoice === "rock" && playerChoice === "scissors"){
        outcome = "Computer Wins!";
        computerScore++;
        computerSource.textContent = "Computer Score: " + computerScore;
        let newDiv = document.createElement("div")
        newDiv.textContent = outcome;
        newDiv.style.textAlign = "center";
        document.getElementsByTagName("body")[0].appendChild(newDiv);
        return outcome;
    } else if(computerChoice === "paper" && playerChoice === "scissors"){
        outcome = "You Win!";
        playerScore++;
        playerSource.textContent = "Player Score: " + playerScore;
        let newDiv = document.createElement("div")
        newDiv.textContent = outcome;
        newDiv.style.textAlign = "center";
        document.getElementsByTagName("body")[0].appendChild(newDiv);
        return outcome;
    } else if(computerChoice === "paper" && playerChoice === "rock"){
        outcome = "Computer Wins!";
        computerScore++;
        computerSource.textContent = "Computer Score: " + computerScore;
        let newDiv = document.createElement("div")
        newDiv.textContent = outcome;
        newDiv.style.textAlign = "center";
        document.getElementsByTagName("body")[0].appendChild(newDiv);
        return outcome;
    } else if(computerChoice === "scissors" && playerChoice === "rock"){
        outcome = "You Win!";
        playerScore++;
        playerSource.textContent = "Player Score: " + playerScore;
        let newDiv = document.createElement("div")
        newDiv.textContent = outcome;
        newDiv.style.textAlign = "center";
        document.getElementsByTagName("body")[0].appendChild(newDiv);
        return outcome;
    } else if(computerChoice === "scissors" && playerChoice === "paper"){
        outcome = "Computer Wins!";
        computerScore++;
        computerSource.textContent = "Computer Score: " + computerScore;
        let newDiv = document.createElement("div")
        newDiv.textContent = outcome;
        newDiv.style.textAlign = "center";
        document.getElementsByTagName("body")[0].appendChild(newDiv);
        return outcome;
    }
}

rockButton.addEventListener("click", () => {
    outcome = playRound("rock", getComputerChoice());
    console.log(outcome);
});


paperButton.addEventListener("click", () => {
    outcome = playRound("paper", getComputerChoice());
    console.log(outcome);
});

scissorsButton.addEventListener("click", () => {
    outcome = playRound("scissors", getComputerChoice());
    console.log(outcome);
});

if(playerScore === 5)
{
    let newDiv = document.createElement("div")
    newDiv.textContent = "Game Over! You Beat the Computer!";
    newDiv.style.textAlign = "center";
    document.getElementsByTagName("body")[0].appendChild(newDiv);
} else if(computerScore === 5){
    let newDiv = document.createElement("div")
    newDiv.textContent = "Game Over! The Computer beat You!";
    newDiv.style.textAlign = "center";
    document.getElementsByTagName("body")[0].appendChild(newDiv);
}