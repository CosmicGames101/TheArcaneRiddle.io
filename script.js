// Array of failure messages
var failureMessages = [
    "Incorrect. Please quit now.",
    "That's not quite right. Maybe quit while you're ahead?",
    "Oops, wrong answer. This means you're a noble member!",
    "Not quite. Give up fodder!",
    "Incorrect answer. You're close! Just kidding, you are a noble phantasm member! Sucks to suck."
];

// Counter for empty submissions
var emptySubmissionCount = 0;

// Flag to track if the timer is active
var timerActive = false;

// Function to check the user's answer
function checkAnswer() {
    var answer = document.getElementById("answer").value.trim().toLowerCase(); // Trim whitespace
    var result = document.getElementById("result");

    if (answer === "") {
        emptySubmissionCount++;

        // Different messages for each empty submission up to 5 times
        if (emptySubmissionCount <= 5) {
            switch (emptySubmissionCount) {
                case 1:
                    result.textContent = "Please put an answer in the box.";
                    break;
                case 2:
                    result.textContent = "Come on, you can do better than that. Try again.";
                    break;
                case 3:
                    result.textContent = "Seriously? Still no answer? You're not even trying.";
                    break;
                case 4:
                    result.textContent = "You're pushing it. Give me something to work with!";
                    break;
                case 5:
                    result.textContent = "Okay, that's enough. Time to give up.";
                    startTimer();
                    break;
                default:
                    result.textContent = "Please put an answer in the box.";
            }
        }
    } else {
        emptySubmissionCount = 0; // Reset the count if answer is not empty

        if (!timerActive) {
            if (answer === "if anyone is able to decipher this text then you have found the first hint, the first hint is zxclosure") {
                result.textContent = "Correct! This must mean you aren't a noble member meaning no brainrot. Good luck with the riddle!";
                // Add logic here to navigate to the next riddle
            } else {
                // Randomly select a failure message
                var randomIndex = Math.floor(Math.random() * failureMessages.length);
                result.textContent = failureMessages[randomIndex];
            }
        } else {
            result.textContent = "You can't submit an answer while the timer is active.";
        }
    }
}

// Function to start the timer
function startTimer() {
    timerActive = true;
    var seconds = 120; // 2 minutes = 120 seconds

    var timerInterval = setInterval(function () {
        seconds--;
        if (seconds <= 0) {
            clearInterval(timerInterval);
            timerActive = false;
            document.getElementById("result").textContent = "Timer expired. You can now submit an answer.";
        }
    }, 1000);
}
