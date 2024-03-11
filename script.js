// Array of failure messages
var failureMessages = [
    "Incorrect. Please quit now.",
    "That's not quite right. Maybe quit while you're ahead?",
    "Oops, wrong answer. This means you're a noble member!",
    "Not quite. Give up fodder!",
    "Incorrect answer. You're close! Just kidding, you are a noble phantasm member! Sucks to suck."
];

// Function to check the user's answer
function checkAnswer() {
    var answer = document.getElementById("answer").value.trim().toLowerCase(); // Trim whitespace
    var result = document.getElementById("result");

    if (answer === "") {
        result.textContent = "Please enter an answer before submitting.";
    } else if (answer === "if anyone is able to decipher this text then you have found the first hint, the first hint is zxclosure") {
        result.textContent = "Correct! This must mean you aren't a noble member meaning no brainrot. Good luck with the riddle!";
        // Add logic here to navigate to the next riddle
    } else {
        // Randomly select a failure message
        var randomIndex = Math.floor(Math.random() * failureMessages.length);
        result.textContent = failureMessages[randomIndex];
    }
}
