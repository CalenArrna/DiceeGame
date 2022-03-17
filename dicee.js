
function rollDices() {
  var randomNumberPlayerOne = Math.floor(Math.random() * 6) + 1;
  var randomNumberPlayerTwo = Math.floor(Math.random() * 6) + 1;
  var message = "Refresh Me!!!!!"

  if(randomNumberPlayerOne > randomNumberPlayerTwo) {
    message = "🚩 Player One Wins!";
  }else if(randomNumberPlayerOne < randomNumberPlayerTwo) {
    message = "Player Two Wins! 🚩";
  }else {
    message = "It's a Draw!";
  }

  var listOfDiceImages = document.getElementsByClassName('dice-img');

  listOfDiceImages[0].src = "images/dice" + randomNumberPlayerOne + ".png";
  listOfDiceImages[1].src = "images/dice" + randomNumberPlayerTwo + ".png";

  document.querySelector("h1.title").innerHTML = message;
}
