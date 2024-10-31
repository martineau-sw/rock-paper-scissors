/*
FUNCTION getComputerChoice() returns string
  INIT Number variable 'choice' to random number [0, 1) multiplied by 3
  IF choice is greater than or equal to 0 THEN
    RETURN string "rock"
  ENDIF
  IF choice is greater than or equal to 1 THEN
    RETURN string "paper"
  ENDIF
  IF choice is greater than or equal to 2 THEN
    RETURN string "scissors"
  ENDIF
ENDFUNCTION
*/


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
  ENDCASE
*/

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