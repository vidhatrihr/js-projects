let x = 0;
let y = 0;

document.addEventListener('mousemove', event => {
  x = event.clientX;
  y = event.clientY;
  appendHeart();
});

function appendHeart() {
  let div = document.createElement('div');
  div.classList.add('heart');
  div.innerHTML = '♡';

  let ftz = (Math.random() * 5).toFixed(2);

  div.style.top = `${y - ftz * 10}px`;
  div.style.left = `${x - ftz * 5}px`;

  div.style.fontSize = `${ftz}rem`;
  div.style.animationDuration = `${4 / ftz}s`;

  setTimeout(() => {
    document.body.removeChild(div);
  }, 3000);
  document.body.appendChild(div);
}
