$display = document.getElementById('display');

let exp = '';

function isOperator(token) {
  return ['÷', '×', '-', '+'].includes(token);
}

function updateDisplay() {
  $display.value = exp;
}

function append(token) {
  if (isOperator(token)) {
    let lastToken = exp[exp.length - 1];
    if (isOperator(lastToken)) {
      // token & lastToken both are operators
      exp = exp.slice(0, -1); // drop lastToken
    }
  }

  // DON'T REACH HERE IF: token & lastToken both are operators
  exp += token;
  updateDisplay();
}

function allClear() {
  exp = '';
  updateDisplay();
}

function del() {
  exp = exp.slice(0, -1);
  updateDisplay();
}

function calc() {
  exp = exp.replaceAll('÷', '/');
  exp = exp.replaceAll('×', '*');
  try {
    exp = eval(exp).toString();
    updateDisplay();
  } catch {
    exp = '';
    $display.value = 'ERROR!';
  }
}
