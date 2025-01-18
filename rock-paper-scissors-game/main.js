let userChoice = null;
let computerChoice = null;
let winner = null;

let choices = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;
let drawScore = 0;

let rockBtnEl = document.querySelector('.choice-button.rock');
let paperBtnEl = document.querySelector('.choice-button.paper');
let scissorsBtnEl = document.querySelector('.choice-button.scissors');

function setChoices(choiceValue) {
  userChoice = choiceValue;
  computerChoice = choices[parseInt(Math.random() * 3)];
}

function setWinner() {
  if (userChoice == computerChoice) {
    winner = 'draw';
  } else if (userChoice == 'rock' && computerChoice == 'scissors') {
    winner = 'user';
  } else if (userChoice == 'paper' && computerChoice == 'rock') {
    winner = 'user';
  } else if (userChoice == 'scissors' && computerChoice == 'paper') {
    winner = 'user';
  } else {
    winner = 'computer';
  }
}

function setScores() {
  if (winner == 'user') {
    userScore++;
  } else if (winner == 'computer') {
    computerScore++;
  } else {
    drawScore++;
  }
}

function updateUI() {
  // display scores
  let userScoreEl = document.querySelector('.user-score');
  let computerScoreEl = document.querySelector('.computer-score');
  let drawScoreEl = document.querySelector('.draw-score');
  userScoreEl.innerHTML = userScore;
  computerScoreEl.innerHTML = computerScore;
  drawScoreEl.innerHTML = drawScore;

  // display choices made
  let choiceMessageEl = document.querySelector('.choice-message');

  // function getChoiceEmoji(choice) {
  //   if (choice == 'rock') {
  //     return '👊';
  //   } else if (choice == 'paper') {
  //     return '🤚';
  //   }
  //   return '✌️';
  // }

  const emojiMap = {
    rock: '👊',
    paper: '🤚',
    scissors: '✌️',
  };

  let userChoiceEmoji = emojiMap[userChoice];
  let computerChoiceEmoji = emojiMap[computerChoice];

  choiceMessageEl.innerHTML = `You chose ${userChoiceEmoji} and computer chose ${computerChoiceEmoji}`;

  // display result
  let resultMessageEl = document.querySelector('.result-message');
  resultMessageEl.classList.add('active');
  if (winner == 'user') {
    resultMessageEl.innerHTML = `You won!`;
  } else if (winner == 'computer') {
    resultMessageEl.innerHTML = 'Computer won!';
  } else {
    resultMessageEl.innerHTML = "It's a draw!";
  }
}

rockBtnEl.addEventListener('click', function () {
  setChoices('rock');
  setWinner();
  setScores();
  updateUI();
});

paperBtnEl.addEventListener('click', function () {
  setChoices('paper');
  setWinner();
  setScores();
  updateUI();
});

scissorsBtnEl.addEventListener('click', function () {
  setChoices('scissors');
  setWinner();
  setScores();
  updateUI();
});
