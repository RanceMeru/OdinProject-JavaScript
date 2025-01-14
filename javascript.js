
//Step 4 tracks the human's score
let humanScore = 0;
let computerScore = 0;

//this how the game starts and to be called to start the game again after it has finished
function playGame(){
//step 6
//makes a prompt that displays a message and takes inn input
  let input = prompt("type rock, paper or scissors");


  //step 3
  function getHumanChoice(input) {
    switch(input.toLowerCase()) {
      case "rock":
        return "Rock";
      case "paper":
        return "Paper";
      case "scissors":
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



//change this to the top so that the player goes first 


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if(humanChoice === computerChoice){
    console.log("It's a tie!");
    return "Tie";
  }
  //can reuse this to keep track of the score and incriment
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
) {
  console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  humanScore++;
  return "Human";
}
console.log(`You lose!" ${computerChoice} beats ${humanChoice}`);
computerScore++;
return "Computer";
}


//when this is changed the game is cut short but together it is fine but does not function as intended
const humanChoice = getHumanChoice(input);

const computerChoice = getComputerChoice();

alert("You chose: " + humanChoice + "\nThe computer chose: " + computerChoice);

//this is where the bot chooses a different option then what was said in the previous dialog
if (humanChoice) {
  const result = playRound(humanChoice, computerChoice);
  
  if (result === "Human") {
    alert("You win this round!");
  } else if (result === "Computer") {
    alert("Computer wins this round!");
  } else {
    alert("It's a tie!");
  }
  
  alert("Current Scores:\nYou: " + humanScore + "\nComputer: " + computerScore);
} else {
  alert("Invalid input. Please enter rock, paper, or scissors.");
}




//all below exceot function call was removed

let playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        playGame();
    } else {
        alert("Final Scores:\nYou: " + humanScore + "\nComputer: " + computerScore);
    }
  }
playGame();


