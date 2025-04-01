console.log('Hello, world!')

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  return ['rock', 'paper', 'scissors'][random];
}

console.log('Computer choice:', getComputerChoice());