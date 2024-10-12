let computerScore = 0;
let humanScore = 0;
let round = 0;

function getWinner(){
    if(computerScore > humanScore){
        console.log("You Lose, try again next time!");
    } else if(computerScore < humanScore){
        console.log("You Win! Great Job!");
    } else{
        console.log("Woah, a tie! Good game.")
    }
}

function playGame(){
    function getComputerChoice(){
        let num = Math.floor(Math.random() * 100) + 1;
        if(num <= 33){
            return "rock";
        } else if(num <= 66 && num > 33){
            return "paper";
        } else if(num > 66){
            return "scissors";
        }
    }
    
    
    function getHumanChoice(){
        let choice = prompt("Rock, Paper, or Scissors?");
        return choice;
    }
    
    
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
    
        console.log(humanChoice);
        console.log(computerChoice);
    
        if(humanChoice === computerChoice){
            console.log("Tie! No points to anyone");
        } else if(humanChoice === "rock" && computerChoice === "paper"){
            console.log("Computer Wins!");
            computerScore++;
        } else if(humanChoice === "paper" && computerChoice === "scissors"){
            console.log("Computer Wins!");
            computerScore++;
        } else if(humanChoice === "scissors" && computerChoice === "rock"){
            console.log("Computer Wins!")
            computerScore++;
        }else{
            console.log("You Win!")
            humanScore++;
        }
    
        console.log("Your Score: " + humanScore);
        console.log("Computer's Score: " + computerScore);
    }
    
    playRound(getHumanChoice(), getComputerChoice());
    round++;
}

while(round < 5){
    playGame();
}

getWinner();