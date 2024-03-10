function checkAnswer() {
    var answer = document.getElementById("answer").value.toLowerCase();
    var result = document.getElementById("result");

    if (answer === "elephant") {
        result.textContent = "Correct! You can proceed to the next riddle.";
        // Add logic to navigate to the next riddle
    } else {
        result.textContent = "Incorrect. Please try again.";
    }
}
