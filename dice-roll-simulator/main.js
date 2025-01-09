let buttonEl = document.querySelector('.game-container button');
let diceEl = document.querySelector('.game-dice');
let resultContainerEl = document.querySelector('.result-container');

const dieFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
let rollIdx = 1;

buttonEl.addEventListener('click', function () {
  diceEl.classList.add('roll-animation'); // when button clicked
});

diceEl.addEventListener('animationend', function () {
  diceEl.classList.remove('roll-animation'); // after animation finishes (1sec later)
  let randomInt = parseInt(Math.random() * 6);
  diceEl.innerHTML = dieFaces[randomInt];

  //  now add the result item to result container
  addResultItem(randomInt);
  rollIdx++;
});

function addResultItem(randomInt) {
  let div = document.createElement('div');
  resultContainerEl.prepend(div);

  div.outerHTML = `<div class="result-item slide-up-animation">
                      <span class="result-label">Roll #${rollIdx}:</span>
                      <span class="result-dice">${dieFaces[randomInt]}</span>
                   </div>`;
}

// function addResultItem(randomInt) {
//   let div = document.createElement('div');
//   div.classList.add('result-item');
//   div.innerHTML = `<span class="result-label">Roll #${rollIdx}:</span>
//                    <span class="result-dice">${dieFaces[randomInt]}</span>`;
//   resultContainerEl.appendChild(div);
// }

// function addResultItem(randomInt) {
//   let div = document.createElement('div');
//   div.classList.add('result-item');

//   let labelSpan = document.createElement('span');
//   labelSpan.classList.add('result-label');
//   labelSpan.innerHTML = `Roll #${rollIdx}`;

//   let diceSpan = document.createElement('span');
//   diceSpan.classList.add('result-dice');
//   diceSpan.innerHTML = dieFaces[randomInt];

//   div.appendChild(labelSpan);
//   div.appendChild(diceSpan);
//   resultContainerEl.appendChild(div);
// }
