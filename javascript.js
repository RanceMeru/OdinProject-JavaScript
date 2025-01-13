console.log("Hello World");
//Step 4
let humanScore = 0;
let computerScore = 0;

let input = prompt("Press 1 for rock\nPress 2 for paper\nPress 3 for scissors");

//making a function to let the computer make a choice of which number to display 1,2 or 3
// Step 2
function getComputerChoice(){

    const randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return "Rock";
      } else if (randomNumber < 2/3) {
        return "Paper";
      } else {
        return "Scissors";
      }
    }      //if less than 2 make 1
      //if greater than or equal to 2 but less than 3 make 2

//step 3
function getHumanChoice(input) {
  switch(input) {
      case "1":
          return "Rock";
      case "2":
          return "Paper";
      case "3":
          return "Scissors";
      default:
          return null;
  }
}

alert("the bot chose " + getComputerChoice());
//change this to the top so that the player goes first 


function determineWinner(humanChoice, computerChoice) {
  if (humanhoice === computerChoice) {
      return "It's a tie!";
  }
  //can reuse this to keep track of the score and incriment
  if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
      return "Human";
  }
  return "Computer";
}

const humanChoice = getHumanChoice(input);



if (humanChoice) {
    const computerChoice = getComputerChoice();
    alert("You chose: " + humanChoice + "\nThe computer chose: " + computerChoice);
    const result = determineWinner(humanChoice, computerChoice);
    
    if (result === "human") {
        humanScore++;
        alert("You win this round!");
    } else if (result === "computer") {
        computerScore++;
        alert("Computer wins this round!");
    } else {
        alert("It's a tie!");
    }
    
    alert("Current Scores:\nYou: " + humanScore + "\nComputer: " + computerScore);
} else {
    alert("Invalid input. Please enter 1, 2, or 3.");
}
console.log("track score");
function playRound(humanChoice, computerChoice) {
  return humanChoice.toLowerCase() === computerChoice.toLowerCase();
}

const humanSelection = getHumanChoice(input);
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("track end of code");