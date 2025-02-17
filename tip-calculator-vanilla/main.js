let $billAmount = document.getElementById('bill-amount');
let $tipPercentage = document.getElementById('tip-percentage');

let $result = document.querySelector('.result');
let $thanks = document.querySelector('.message.thanks');
let $love = document.querySelector('.message.love');

let $loveMessage1 = document.querySelector('.message.love span.m1');
let $loveMessage2 = document.querySelector('.message.love span.m2');
let $loveMessage3 = document.querySelector('.message.love span.m3');

updateResult();

function updateResult() {
  let billAmount = Number($billAmount.value);
  let tipPercentage = Number($tipPercentage.value);

  let total = (billAmount + (billAmount * tipPercentage) / 100).toFixed(2);

  $result.innerHTML = `Total: ₹${total}`;
  $thanks.innerHTML = `Thank you for paying ₹${total}`;

  updateLoveMessage();

  if (billAmount > 0 && tipPercentage > 0) {
    $love.classList.add('active');
  } else {
    $love.classList.remove('active');
  }
}

function updateLoveMessage() {
  let tipPercentage = Number($tipPercentage.value);

  $loveMessage1.classList.remove('active');
  $loveMessage2.classList.remove('active');
  $loveMessage3.classList.remove('active');

  if (tipPercentage <= 10) {
    $loveMessage1.classList.add('active');
  } else if (tipPercentage <= 20) {
    $loveMessage2.classList.add('active');
  } else {
    $loveMessage3.classList.add('active');
  }
}

function resetForm() {
  $billAmount.value = '';
  $tipPercentage.value = '';
  updateResult();
}

function validateTipPercentage() {
  if ($tipPercentage.value > 100) {
    $tipPercentage.value = 100;
  }
  updateResult();
}
