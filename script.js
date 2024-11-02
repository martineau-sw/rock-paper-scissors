function getComputerChoice() {     
  let choice = Math.random() * 3;    
                                    
  if (choice >= 2) {                
    return "rock";                  
  }                                 

  if (choice >= 1) {                
    return "paper";                 
  }                                 

  if (choice >= 0) {                
    return "scissors";              
  }                                 
  return "unexpected";
}

function getHumanChoice() {                                       
  let choice = prompt("Rock, paper, or scissors?");               
  choice = choice.toLowerCase();                                  
  choice = choice.trim();                                         
  switch (choice) {                                               
    case "rock":                                                  
    case "paper":                                                 
    case "scissors":                                              
      return choice;                                           
    default:                                                      
      console.log("that's not how we play rock-paper-scissors");  
      return getHumanChoice();                                    
  }                                                               
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let win = false;

  // tie condition accounted for
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  // check for win, otherwise loss
  switch (humanChoice) {
    case "rock":
      win = computerChoice === "scissors";
    case "paper":
      win = computerChoice === "rock";
    case "scissors":
      win = computerChoice === "paper";
  }

  humanChoiceFormat = humanChoice.at(0).toUpperCase() + humanChoice.substring(1);
  computerChoiceFormat = computerChoice.at(0).toUpperCase() + computerChoice.substring(1);

  if (win) {
    console.log(`You win! ${humanChoiceFormat} beats ${computerChoiceFormat}!`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoiceFormat} beats ${humanChoiceFormat}!`);
    computerScore++;
  }
}

function playGame() {
  for (let rounds = 0; rounds < 5; rounds++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log("You win the game!");
    return;
  } 

  if (humanScore < computerScore) {
    console.log("You lose the game!");
    return;
  }

  console.log("It's a tie!"); 
}
