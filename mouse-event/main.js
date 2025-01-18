let $xData = document.querySelector('.data-value.x');
let $yData = document.querySelector('.data-value.y');

document.addEventListener('mousemove', event => {
  $xData.innerHTML = event.clientX;
  $yData.innerHTML = event.clientY;
});
