let time = 180; // 3 minutes en secondes (round 1)
let timerInterval;
let isRunning = false;
let currentRound = 1;

const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const round1Button = document.getElementById("round1");
const nextRoundButton = document.getElementById("nextRound");

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}
function updateTimer() {
  timerElement.textContent = formatTime(time);
  if (time <= 0) {
    pauseTimer();
    showCustomAlert();
  }
}

function startTimer() {
  if (!isRunning && time > 0) {
    timerInterval = setInterval(() => {
      time--;
      updateTimer();
    }, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  if (currentRound === 1) {
    time = 180; // 3 minutes
  } else {
    time = 150; // 2 minutes 30 secondes
  }
  updateTimer();
}

function setRound1() {
  pauseTimer();
  time = 180;
  currentRound = 1;
  updateTimer();
}

function setNextRound() {
  pauseTimer();
  time = 150;
  currentRound = 2;
  updateTimer();
}

function showCustomAlert() {
  const customAlert = document.getElementById("customAlert");
  customAlert.classList.add("active");
}

function hideCustomAlert() {
  const customAlert = document.getElementById("customAlert");
  customAlert.classList.remove("active");
  setNextRound();
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
round1Button.addEventListener("click", setRound1);
nextRoundButton.addEventListener("click", setNextRound);
document
  .getElementById("closeAlert")
  .addEventListener("click", hideCustomAlert);

// Initialisation
updateTimer();
