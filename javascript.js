/*
create variable named playerScore and assign it 0
create variable named compScore and assign it 0

call game() 


define function game()

  for loop 5 times
    call computerPlay() for computer to pick either rock paper or scissors and assign it to computerSelection

    ask user for an input: "Pick either rock, paper, or       scissors" and assign it to playerSelection with toLowerCase()

    call playRound(playerSelection, computerSelection) inside console.log()

  display the winner and score */
let playerScore = 0;
let compScore = 0;
let playerSelection;
let computerSelection;

game();

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt('Pick either rock, paper, or scissors');

    computerSelection = computerPlay();

    console.log(playRound(playerSelection.toLowerCase(), computerSelection));
  }

  if (playerScore == compScore) {
    console.log(`It's a Draw! ${playerScore} - ${compScore}`);
  } else if (playerScore > compScore) {
    console.log(`You Win! ${playerScore} - ${compScore}`);
  } else {
    console.log(`You Lost! ${playerScore} - ${compScore}`);
  }
}

/*define function computerPlay()
    initiate randNum and assign random number
    if randNum is 0, return "rock"
    else if randNum is 1 return "paper"
    otherwise return "scissors" */
function computerPlay() {
  let randNum = Math.floor(Math.random() * 3);

  if (randNum == 0) {
    return 'rock';
  } else if (randNum == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

/*define function playRound(playerSelection, computerSelection)
    if playerSelection has the same string as computerSelection
      return 'Draw!'

    if playerSelection wins, return the result and increment the player's score. Otherwise return the result and increment the computer's score*/
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 'Draw!';
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      playerScore++;
      return 'You Win! Paper beats Rock';
    } else {
      compScore++;
      return 'You Lost! Scissors beats Paper';
    }
  } else if (playerSelection == 'rock') {
    if (computerSelection == 'scissors') {
      playerScore++;
      return 'You Win! Rock beats Scissors';
    } else {
      compScore++;
      return 'You Lost! Paper beats Rock';
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'paper') {
      playerScore++;
      return 'You Win! Scissors beats Paper';
    } else {
      compScore++;
      return 'You Lost! Rock beats Scissors';
    }
  }
}
