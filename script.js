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
  const roundOutcome = getOutcomeFromChoices(humanChoice, computerChoice);
  updateScoreFromOutcome(roundOutcome);
  updateScoreElements(humanScore, computerScore);

  const gameOutcome = checkGameOutcome(humanScore, computerScore);

  if (gameOutcome) {
    updateAnnouncementElement(formatGameAnnouncement(gameOutcome));
    updateBackgroundColorFromOutcome(gameOutcome);
    endGame(gameOutcome);
  } else {
    updateAnnouncementElement(formatRoundAnnouncement(humanChoice, computerChoice, roundOutcome));
    updateBackgroundColorFromOutcome(roundOutcome);
  }
}

function endGame(gameOutcome) {
  const humanElement = document.querySelector('.human');
  const outputElement = document.querySelector('.output');

  outputElement.removeChild(gameOutcome > 0 ? outputElement.firstElementChild : outputElement.lastElementChild);
  humanElement.classList.add('disable');
  outputElement.classList.add('output');
}

function getOutcomeFromChoices(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return 0;
  }

  switch (humanChoice) {
    case "rock":
      return computerChoice === "scissors" ? 1 : -1;
    case "paper":
      return computerChoice === "rock" ? 1 : -1;
    case "scissors":
      return computerChoice === "paper" ? 1 : -1;
  }
}

function updateScoreFromOutcome(outcome) {
  if (outcome === 0) return;
  outcome === 1 ? humanScore++ : computerScore++;
}

function applyEventDelegate() {
  const buttonsElement = document.querySelector('.human');

  buttonsElement.addEventListener('click', event => {
    const id = (event.target.id !== '') ? 
      event.target.id :
      event.target.parentElement.id;
    
    playRound(id, getComputerChoice());
  });
}

function updateScoreElements(humanScore, computerScore) {
  const humanScoreElement = document.querySelector('#human-score');
  const computerScoreElement = document.querySelector('#computer-score');

  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
}

function formatRoundAnnouncement(humanChoice, computerChoice, outcome) {
  humanChoice = humanChoice.at(0).toUpperCase() + humanChoice.substring(1);
  computerChoice = computerChoice.at(0).toUpperCase() + computerChoice.substring(1);

  switch (outcome) {
    case -1:
      return `You lose! ${computerChoice} beats ${humanChoice}!`
    case 0:
      return 'It\'s a tie!';
    case 1:
      return `You win! ${humanChoice} beats ${computerChoice}!` 
  }
}

function checkGameOutcome(humanScore, computerScore) {
  if (humanScore === 5) {
    return 1;
  }

  if (computerScore === 5) {
    return -1;
  }

  return 0;
}

function formatGameAnnouncement() {
  if (humanScore === 5) {
    return 'You win the game!'
  }
  
  if (computerScore === 5) {
    return 'You lose the game!'
  }
}

function updateAnnouncementElement(message) {
  const announcementElement = document.querySelector('#announcement');
  announcementElement.textContent = message;
}

function updateBackgroundColorFromOutcome(outcome) {
  const body = document.querySelector('body');
  body.classList.remove(...body.classList);
  switch (outcome) {
    case -1:
      body.classList.add('computer-winner');
      return;
    case 0:
      body.classList.add('tie');
      return;
    case 1:
      body.classList.add('player-winner');
      return;
  }
}

applyEventDelegate();