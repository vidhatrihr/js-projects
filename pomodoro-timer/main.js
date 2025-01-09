let timerDisplayEl = document.querySelector('.timer-display');
let startButtonEl = document.querySelector('.start');
let stopButtonEl = document.querySelector('.stop');
let resetButtonEl = document.querySelector('.reset');
let progressInnerEl = document.querySelector('.progress-inner');
let progressPercentEl = document.querySelector('.progress-percent');
let selectEl = document.querySelector('select');

let minutesInitial = 1;
let secondsInitial = 0;
let minutesRemaining = minutesInitial;
let secondsRemaining = secondsInitial;
let intervalId = null;
let isTimerRunning = false;

let alarmAudio = new Audio('./chooka_woo_woo.mp3');
let tickAudio = new Audio('./mixkit-classic-click-1117.wav');

updateTimeDisplay();

function decreaseTime() {
  if (secondsRemaining == 0) {
    minutesRemaining--;
    secondsRemaining = 59;
  } else {
    secondsRemaining--;
  }
}

function updateTimerUI() {
  updateTimeDisplay();
  updateProgressBar();
}

function updateTimeDisplay() {
  timerDisplayEl.innerHTML = `${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining
    .toString()
    .padStart(2, '0')}`;
}

function updateProgressBar() {
  let totalInitialSeconds = minutesInitial * 60 + secondsInitial;
  let totalRemainingSeconds = minutesRemaining * 60 + secondsRemaining;
  let progressPercent = (totalRemainingSeconds / totalInitialSeconds) * 100;
  progressPercent = 100 - progressPercent;
  progressPercent = `${progressPercent.toFixed(2)}%`;
  if (progressPercent == '0.00%') {
    progressPercentEl.innerHTML = '';
    progressInnerEl.style.width = '100%';
  } else {
    progressPercentEl.innerHTML = progressPercent;
    progressInnerEl.style.width = progressPercent;
  }
}

function stopAlarmAudio() {
  alarmAudio.pause();
  alarmAudio.currentTime = 0;
}

function tick() {
  decreaseTime();
  updateTimerUI();

  tickAudio.play();

  // time is over
  if (minutesRemaining == 0 && secondsRemaining == 0) {
    stopTimer();
    alarmAudio.play();
  }
}

function startTimer() {
  if (isTimerRunning == false) {
    if (minutesRemaining == 0 && secondsRemaining == 0) {
      resetTimer();
    }
    isTimerRunning = true;
    intervalId = setInterval(tick, 1000);
  }
}

function stopTimer() {
  stopAlarmAudio();
  isTimerRunning = false;
  clearInterval(intervalId);
}

function resetTimer() {
  stopTimer();
  minutesRemaining = minutesInitial;
  secondsRemaining = secondsInitial;
  updateTimerUI();
}

startButtonEl.addEventListener('click', function () {
  startTimer();
});

stopButtonEl.addEventListener('click', function () {
  stopTimer();
});

resetButtonEl.addEventListener('click', function () {
  resetTimer();
});

selectEl.addEventListener('change', function () {
  minutesInitial = parseInt(selectEl.value);
  resetTimer();
});
