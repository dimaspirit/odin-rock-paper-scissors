console.log('Hello, world!')

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  return ['rock', 'paper', 'scissors'][random];
}

function getHumanChoice() {
  const choice = prompt('Enter your choice (rock, paper, scissors):');
  return choice;
}

console.log('Computer choice:', getComputerChoice());
console.log('Human choice:', getHumanChoice());