console.log('Hello, world!')

let computerScore = 0;
let humanScore = 0;

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
    console.log('You win!');
    humanScore++;
  } else {
    console.log('You lose!');
    computerScore++;
  }

  console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}

playRound(getComputerChoice(), getHumanChoice());
