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
  let humanWins = false;

  if (humanChoice === computerChoice) {
    updateAnnouncement('It\'s a tie!');
    return;
  }

  switch (humanChoice) {
    case "rock":
      humanWins = computerChoice === "scissors";
      break;
    case "paper":
      humanWins = computerChoice === "rock";
      break;
    case "scissors":
      humanWins = computerChoice === "paper";
      break;
  }

  humanWins ? humanScore++ : computerScore++;
  
  updateScores(humanScore, computerScore)
  updateAnnouncement(formatRoundAnnouncement(humanChoice, computerChoice, humanWins));
}

function applyEventDelegate() {
  buttonsElement = document.querySelector('.human');
  buttonsElement.addEventListener('click', event => {
    playRound(event.target.id, getComputerChoice());
    event.stopPropagation();
  });
}

function updateScores(humanScore, computerScore) {
  humanScoreElement = document.querySelector('#human-score');
  computerScoreElement = document.querySelector('#computer-score');

  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
}

function formatRoundAnnouncement(humanChoice, computerChoice, humanWon) {
  humanChoice = humanChoice.at(0).toUpperCase() + humanChoice.substring(1);
  computerChoice = computerChoice.at(0).toUpperCase() + computerChoice.substring(1);
  const roundAnnouncement = humanWon ? 
    `You win! ${humanChoice} beats ${computerChoice}!` :
    `You lose! ${computerChoice} beats ${humanChoice}!`;
  return roundAnnouncement;
}

function updateAnnouncement(message) {
  announcementElement = document.querySelector('#announcement');
  announcementElement.textContent = message;
}

applyEventDelegate();