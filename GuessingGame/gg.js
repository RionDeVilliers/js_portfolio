var secretNumber = Math.floor(Math.random() * 10) + 1;
var result = document.getElementById("result");

function guessNumber() {
  var guess = document.getElementById("textbox").value;
  var convertedGuess = Number(guess);
  checkAnswer(convertedGuess);
}

function checkAnswer(answer) {
  if (answer === secretNumber) {
    result.innerHTML = "Congratulations! Your answer is correct.";
    clearInput();
  } else if (answer < secretNumber) {
    result.innerHTML = "Incorrect, your number is to low";
    clearInput();
  } else if (answer < secretNumber) {
    result.innerHTML = "Incorrect your number is too high";
    clearInput();
  } else {
    result.innerHTML = "Invalid answer, please enter a valid number";
    clearInput();

  }
}

function clearInput() {
  document.getElementById("textbox").value = "";
}
