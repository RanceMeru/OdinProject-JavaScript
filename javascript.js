
//Step 4 tracks the human's score
let humanScore = 0;
let computerScore = 0;

//this how the game starts and to be called to start the game again after it has finished
function playGame(){
//step 6
//makes a prompt that displays a message and takes inn input
  let input = prompt("Press 1 for rock\nPress 2 for paper\nPress 3 for scissors");

  function playRound(humanChoice, computerChoice) {
    return humanChoice.toLowerCase() === computerChoice.toLowerCase();
  }


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



alert("the bot chose " + getComputerChoice());
//change this to the top so that the player goes first 


function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
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
//when this is changed the game is cut short but together it is fine but does not function as intended
const humanChoice = getHumanChoice(input);

const computerChoice = getComputerChoice();

console.log("logical");

//this is where the bot chooses a different option then what was said in the previous dialog
if (humanChoice) {
    
    alert("You chose: " + humanChoice + "\nThe computer chose: " + computerChoice);
    const result = determineWinner(humanChoice, computerChoice);
    
    if (result === "Human") {
        humanScore++;
        alert("You win this round!");
    } else if (result === "Computer") {
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


//all below exceot function call was removed
const humanSelection = getHumanChoice(input);
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("track end of code");

let playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        playGame();
    } else {
        alert("Final Scores:\nYou: " + humanScore + "\nComputer: " + computerScore);
    }
  }
playGame();


