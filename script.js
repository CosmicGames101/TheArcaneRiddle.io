// Array of failure messages
var failureMessages = [
    "Incorrect. Please quit now.",
    "That's not quite right. Maybe quit while your ahead?",
    "Oops, wrong answer. This means you're a noble member!",
    "Not quite. Give up fodder!",
    "Incorrect answer. You're close! just kidding you are a noble phantasm member! Sucks to suck"
];

// Function to check the user's answer
function checkAnswer(hint) {
    var answer = document.getElementById("answer").value.toLowerCase();
    var result = document.getElementById("result");

    if (answer === "elephant") {
        result.textContent = "Correct! this must mean you aren't a noble member meaning no brainrot. Good luck with the riddle!";
        // Add logic here to navigate to the next riddle
    } else {
        // Randomly select a failure message
        var randomIndex = Math.floor(Math.random() * failureMessages.length);
        result.textContent = failureMessages[randomIndex];
        
        // If hint is provided, display it
        if (hint) {
            displayHint(hint);
        }
    }
}

// Function to display the hint
function displayHint(hint) {
    alert("Hint: " + hint);
}
