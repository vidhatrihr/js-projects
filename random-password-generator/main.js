let $generateBtn = document.querySelector('.generate-btn');
let $input = document.querySelector('input');
let $copyBtn = document.querySelector('.copy-btn');

let chars = 'qwertyuiopasdfghjklzxcvbnm';
chars += 'QWERTYUIOPASDFGHJKLZXCVBNM';
chars += '1234567890';
chars += '!@#$%^&*()';

generatePassword();

function generatePassword() {
  let password = '';
  for (let i = 0; i < 8; i++) {
    let randomInt = parseInt(Math.random() * chars.length);
    password += chars[randomInt];
  }
  $input.value = password;
}

$copyBtn.addEventListener('click', function () {
  $input.select();
  navigator.clipboard.writeText($input.value);

  $copyBtn.classList.add('animated', 'bounceIn');
  $copyBtn.addEventListener('animationend', function () {
    $copyBtn.classList.remove('animated', 'bounceIn');
  });
});

$generateBtn.addEventListener('click', function () {
  generatePassword();
});
