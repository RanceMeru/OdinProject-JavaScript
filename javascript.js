function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  for(let i = 0; i < 5; i++){
      alert(`Round ${i+1}`);

      // Add this line to get user input each round
      let input = prompt("Type rock, paper, or scissors");

      const humanChoice = getHumanChoice(input);
      const computerChoice = getComputerChoice();

      alert("You chose: " + humanChoice + "\nThe computer chose: " + computerChoice);

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
          i--;
      }
  }

  alert("Final Scores:\nYou: " + humanScore + "\nComputer: " + computerScore);

  if (humanScore > computerScore) {
      alert("You win the game!");
  } else if (computerScore > humanScore) {
      alert("Computer wins the game!");
  } else {
      alert("It's a tie game!");
  }

  let playAgain = confirm("Do you want to play again?");
  if (playAgain) {
      playGame();
  }
}
