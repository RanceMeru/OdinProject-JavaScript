console.log("Hello World");

let input = prompt("Press 1 for rock\nPress 2 for paper\nPress 3 for scissors");

//making a function to let the computer make a choice of which number to display 1,2 or 3
function getComputerChoice(){

    const randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return "Rock";
      } else if (randomNumber < 2/3) {
        return "Paper";
      } else {
        return "Scissors";
      }
      //if less than 2 make 1
      //if greater than or equal to 2 but less than 3 make 2
/*  

    if (input === "rock" || input === "paper" || input === "scissors") {
        alert("You entered: " + input);
        console.log("User entered: " + input);
        return input;
    } else {
        alert("You have to put rock, paper, or scissors");
    }
    return Math.random()
 */   
}


alert("the bot chose " + getComputerChoice());
//change this to the top so that the player goes first 


if(randomNumber){



}


//have math.random only choose numbers from 1 to 3
//rock 1 etc
//if else or if statements when it goes through everything
// not equal to 1 2 or 3 it will correct the user and loop back to the start

//let choices = rock = 1, paper =2, scissors =3;




// can make the 1 2 3 have a triangle interaction so that random number < 3 etc