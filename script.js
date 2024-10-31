/*
FUNCTION getComputerChoice() returns string
  INIT Number variable 'choice' to random number [0, 1) multiplied by 3
  // fix: swap the order of conditions to prevent false positives
  IF choice is greater than or equal to 2 THEN
    RETURN string "rock"
  ENDIF
  IF choice is greater than or equal to 1 THEN
    RETURN string "paper"
  ENDIF
  IF choice is greater than or equal to 0 THEN
    RETURN string "scissors"
  ENDIF
ENDFUNCTION
*/

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


/*
FUNCTION getHumanChoice() returns string
  INIT string variable 'choice' to CALL prompt "Rock, paper, or scissors?"
  SET 'choice' to 'choice' lowercased
  SET 'choice' to 'choice' trimmed
  CASE 'choice' OF
    "rock": fall-through
    "paper": fall-through
    "scissors": return string 'choice'
    OTHERS: 
      display "that's not how we play rock-paper-scissors."
      RETURN CALL getHumanChoice()
  ENDCASE
*/

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

/*
FUNCTION playRound(humanChoice, computerChoice) no return 
  INIT 'win' to false
  IF 'humanChoice' is equal to 'computerChoice' 
    return undefined
  CASE 'human' OF
    "rock":
      IF 'computerChoice' is equal to "scissors" THEN
        SET 'win' to true
      ENDIF
      BREAK
    "paper":
      IF 'computerChoice' is equal to "rock" THEN
        SET 'win' to true
      ENDIF
      BREAK
    "scissors":
      IF 'computerChoice' is equal to "scissors" THEN
          SET 'win' to true
        ENDIF
        BREAK
  ENDCASE
  IF 'win' THEN
    display "You win! (humanChoice) beats (computerChoice)"
    increment 'humanScore'
    return
  ENDIF
  display "You lose! (computerChoice) beats (humanChoice)"
  increment 'computerScore'
ENDFUNCTION
*/

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
  // simplified this block to a boolean expression for clarity
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

/*
FUNCTION playGame() no return
  FOR SET 'rounds' to 0, 'rounds' is less than 5, increment 'rounds'
    CALL playRound(CALL getHumanChoice, CALL getComputerChoice);
  ENDFOR

  IF humanScore is greater than computerScore THEN
    display "You win the game!"
    return
  ENDIF

  IF humanScore is less than computerScore THEN
    display "You lose the game!"
  ENDIF

  display "It's a tie!"
ENDFUNCTION
*/

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

playGame();