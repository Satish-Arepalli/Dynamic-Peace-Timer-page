let timerTextEl = document.getElementById("timerText");
let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");

twentySecondsBtnEl.onclick = function() {
    let counterValue = 20;
    timerTextEl.textContent = `${counterValue} seconds left`;
    let timerId = setInterval(function() {
        counterValue -= 1;
        if (counterValue >= 1) {
            timerTextEl.textContent = `${counterValue} seconds left`;
        } else {
            clearInterval(timerId);
            timerTextEl.textContent = "Your moment is complete";
        }
    }, 1000);
};
thirtySecondsBtnEl.onclick = function() {
    let counterValue = 30;
    timerTextEl.textContent = `${counterValue} seconds left`;
    let timerId = setInterval(function() {
        counterValue -= 1;
        if (counterValue >= 1) {
            timerTextEl.textContent = `${counterValue} seconds left`;
        } else {
            clearInterval(timerId);
            timerTextEl.textContent = "Your moment is complete";
        }
    }, 1000);
}
fortySecondsBtnEl.onclick = function() {
    let counterValue = 40;
    timerTextEl.textContent = `${counterValue} seconds left`;
    let timerId = setInterval(function() {
        counterValue -= 1;
        if (counterValue >= 1) {
            timerTextEl.textContent = `${counterValue} seconds left`;
        } else {
            clearInterval(timerId);
            timerTextEl.textContent = "Your moment is complete";
        }
    }, 1000);
};
oneMinuteBtnEl.onclick = function() {
    let counterValue = 60;
    timerTextEl.textContent = `${counterValue} seconds left`;
    let timerId = setInterval(function() {
        counterValue -= 1;
        if (counterValue >= 1) {
            timerTextEl.textContent = `${counterValue} seconds left`;
        } else {
            clearInterval(timerId);
            timerTextEl.textContent = "Your moment is complete";
        }
    }, 1000);
};