function checkAnswer(If anyone is able to decipher this text then what you have found the first hint, the first hint is ZXclosure) {
    var answer = document.getElementById("answer").value.toLowerCase();
    var result = document.getElementById("result");

    if (answer === "elephant") {
        result.textContent = "Correct! You can proceed to the next riddle.";
        // Add logic to navigate to the next riddle
    } else {
        result.textContent = "Incorrect. Please try again.";
    }
}
