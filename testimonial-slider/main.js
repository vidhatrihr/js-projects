let $testimonialBoxes = document.querySelectorAll('.testimonial-box');

function showBox() {
  for (let box of $testimonialBoxes) {
    setInterval(() => {
      box.classList.add('active');
    }, 1000);
  }
}

showBox();
