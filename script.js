console.log('Hello, world!')

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  return ['rock', 'paper', 'scissors'][random];
}

function getHumanChoice() {
  const choice = prompt('Enter your choice (rock, paper, scissors):');
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log('It\'s a tie!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log('You win the round!');
    return 1;
  } else {
    console.log('You lose the round!');
    return 2;
  }
}

function playGame(rounds = 2) {
  let computerScore = 0;
  let humanScore = 0;

  for(let i = 1; i<rounds+1; i++) {
    console.log('Round ' + i);
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log('humanChoice', humanChoice);
    console.log('computerChoice', computerChoice);
    let result = playRound(humanChoice, computerChoice);

    if(result === 1) ++humanScore;
    if(result === 2) ++computerScore;
  }

  console.log(`Result: computer: ${computerScore}, human: ${humanScore}`);
  if(computerScore > humanScore) {
    console.log('Computer wins');
  } if(computerScore < humanScore) {
    console.log('You win');
  } else {
    console.log('It\'s a tie');
  }
}

const playerSelectionBtn = document.querySelectorAll('.playerSelection');

playerSelectionBtn.forEach(el => {
  el.addEventListener('click', (event) => {
    console.log('Select ', event.target.getAttribute("id"));
  });
});

// playGame();