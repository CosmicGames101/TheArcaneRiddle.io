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
    var answer = document.getElementById("answer").value.trim().toLowerCase();
    var result = document.getElementById("result");

    if (answer === "") {
        emptySubmissionCount++;

        if (emptySubmissionCount <= 5) {
            switch (emptySubmissionCount) {
                case 1:
                    result.textContent = "Please put an answer in the box.";
                    break;
                case 2:
                    result.textContent = "Come on, you aren't this dumb are you?";
                    break;
                case 3:
                    result.textContent = "Seriously? Still no answer? ";
                    break;
                case 4:
                    result.textContent = "You're pushing it. Im warning you!";
                    break;
                case 5:
                    result.textContent = "Okay, that's enough.";
                    startTimer(); // Call startTimer function here
                    break;
                default:
                    result.textContent = "I warned you.";
            }
        }
    } else {
        emptySubmissionCount = 0;

        if (!timerActive) {
            if (answer === "this is your first answer and hint zxclosure") { // Correct answer string
                result.textContent = "Correct! This must mean you aren't a noble member meaning no brainrot. Good luck with the riddle!";
            } else {
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

    var timerDisplay = document.getElementById("timer");
    timerDisplay.style.display = "block"; // Show the timer

    var timerInterval = setInterval(function () {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;

        timerDisplay.textContent = "Time remaining: " + minutes + "m " + remainingSeconds + "s";

        seconds--;

        if (seconds < 0) {
            clearInterval(timerInterval);
            timerActive = false;
            document.getElementById("result").textContent = "Timer expired. You can now submit an answer.";
        }
    }, 1000);
}
// Function to redirect to homepage after completion of first riddle
function redirectToHomepage() {
    setTimeout(function() {
        window.location.href = "homepage.html"; // Redirect to homepage after 5 seconds
    }, 5000); // 5000 milliseconds = 5 seconds
}

// Call this function after the correct answer is provided
function handleCorrectAnswer() {
    // Your existing logic for handling correct answer goes here
    // For example:
    document.getElementById("result").textContent = "Correct! Redirecting to homepage...";
    redirectToHomepage(); // Call the function to redirect to homepage
}
