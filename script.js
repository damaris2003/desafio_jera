//define variaveis globais
let timerInterval;
let intervalTimerInterval;
let pomodoroCount = 0;
let pomodoroTime = 25;
let intervalTime = 5;

function startTimer() {
  const timeDisplay = document.getElementById("time");
  const startBtn = document.getElementById("start-btn");
  startBtn.disabled = true;

  let timeLeft = pomodoroTime * 60;

  timerInterval = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      pomodoroCount++;
      document.getElementById("pomodoro-count").innerText = pomodoroCount;
      playNotificationSound();
      startBtn.disabled = false;
    }
  }, 1000);
}

function startIntervalTimer() {
  const timeDisplay = document.getElementById("interval-time");
  const intervalBtn = document.getElementById("interval-btn");
  intervalBtn.disabled = true;

  let timeLeft = intervalTime * 60;

  intervalTimerInterval = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    if (timeLeft === 0) {
      clearInterval(intervalTimerInterval);
      playNotificationSound();
      intervalBtn.disabled = false;
    }
  }, 1000);
}

function playNotificationSound() {
  const sound = new Howl({
    src: ['notification.mp3']
  });
  sound.play();
}

function updatePomodoroTime() {
  const newTime = document.getElementById("pomodoro-time").value;
  pomodoroTime = parseInt(newTime);
  document.getElementById("time").innerText = `${pomodoroTime}:00`;
}