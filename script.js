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
  
  updateComputerChoiceElement(computerChoice);
  updateScoreElements(humanScore, computerScore)
  updateAnnouncementElement(formatRoundAnnouncement(humanChoice, computerChoice, humanWins));
}

function applyEventDelegate() {
  const buttonsElement = document.querySelector('.human');
  buttonsElement.addEventListener('click', event => {
    playRound(event.target.id, getComputerChoice());
    event.stopPropagation();
  });
}

function updateScoreElements(humanScore, computerScore) {
  const humanScoreElement = document.querySelector('#human-score');
  const computerScoreElement = document.querySelector('#computer-score');

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

function updateAnnouncementElement(message) {
  const announcementElement = document.querySelector('#announcement');
  announcementElement.textContent = message;
}

function getIconFromChoice(choice) {
  switch (choice) {
    case 'rock':
      return '🪨';
    case 'paper':
      return '📄';
    case 'scissors':
      return '✂️';
  }

  return '🚫';
}

function updateComputerChoiceElement(computerChoice) {
  const computerChoiceElement = document.querySelector('#computer-choice');
  computerChoiceElement.textContent = getIconFromChoice(computerChoice);
}

applyEventDelegate();