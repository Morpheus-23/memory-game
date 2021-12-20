//=== game board =================================
var selection1;
var selection2;
var gameLevel;
var gameTimer;
var gameInProgress;
var moves = 0;

//--- game setup -----------------------------
function renderBoard(level, size) {
  if (level == null) {
    return;
  }
  gameLevel = level;
  clearBoard();
  var gameBoard = document.getElementById("game-board");
  for (var i = 0; i < size; i++) {

    var card = document.createElement("div");
    card.setAttribute("id", "card" + i);
    card.setAttribute("class", "card");
    card.setAttribute("onclick", "cardClicked(event)");
    card.setAttribute("data-card-index", i);

    gameBoard.appendChild(card);
  }
  setGameStopped();
}

function clearBoard() {

  var gameBoard = document.getElementById("game-board");
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }

}

function startGameplay() {

  var cards = document.getElementsByClassName("card");
  for (var card of cards) {
    unselectCard(card);
  }
  createCards();
  startTimer();
  setGamePlaying();
  gameInProgress = true;
  moves = 0;
  document.getElementById('moves-counter').innerHTML = moves;
}

function stopGameplay() {
  clearInterval(gameTimer);
  setGameStopped();
  gameInProgress = false;
}

function setGamePlaying() {
  document.getElementById("start-button").disabled = true;
  document.getElementById("stop-button").disabled = false;
  document.getElementById("easy-p").disabled = true;
  document.getElementById("med-p").disabled = true;
  document.getElementById("har-p").disabled = true;

}

function setGameStopped() {
  document.getElementById("start-button").disabled = false;
  document.getElementById("stop-button").disabled = true;
  document.getElementById("easy-p").disabled = false;
  document.getElementById("med-p").disabled = false;
  document.getElementById("har-p").disabled = false;

}

function createCards() {
  var cards = Array.from(document.getElementsByClassName("card"));
  var cardPairs = cards.length / 2;
  var cardIndex = 0;

  for (var i = 0; i < cardPairs; i++) {
    cardIndex = Math.floor(Math.random() * cards.length);
    cards[cardIndex].setAttribute("data-card-label", gameLevel + "_" + i);
    cards.splice(cardIndex, 1);

    cardIndex = Math.floor(Math.random() * cards.length);
    cards[cardIndex].setAttribute("data-card-label", gameLevel + "_" + i);
    cards.splice(cardIndex, 1);
  }

}

function setCardBackground(card) {
  var imageUrl = "url(assets/images/" + card.getAttribute("data-card-label") + ".jpg)";
  console.log("imageUrl : " + imageUrl);
  card.style.backgroundImage = imageUrl;
  card.style.backgroundSize = "99%";
  card.style.backgroundRepeat = "no-repeat";
  card.style.backgroundPosition = "center";
}

function clearCardBackground(card) {
  var imageUrl = "url(assets/images/questions.jpg)";

  card.style.backgroundImage = imageUrl;
  card.style.backgroundSize = "99%";
  card.style.backgroundRepeat = "no-repeat";
  card.style.backgroundPosition = "center";
}

//--- game play -----------------------------
function cardClicked(event) {

  var card = event.target;

  // ignore click if already selected or game is stopped
  if (card.classList.contains("card-selected") || !gameInProgress) {
    return;
  }

  if (selection1 == null && selection2 == null) { //the first select
    selection1 = card.getAttribute("id");
    selectCard(card);
  } else if (selection1 != null && selection2 == null) { // the second select
    selection2 = card.getAttribute("id");
    selectCard(card);
    document.getElementById('moves-counter').innerHTML = ++moves;
    if (isMatch()) {
      selection1 = null;
      selection2 = null;
      checkIfComplete();
    } else {
      setTimeout(() => {

        unselectCard(document.getElementById(selection1));
        unselectCard(document.getElementById(selection2));
        selection1 = null;
        selection2 = null;
      }, 1000);
    }
  }
}

function checkIfComplete() {
  var cards = document.getElementsByClassName("card");

  for (let card in cards) {
    if (card.classList.contains("card-unselected")) {
      return;
    }
  }
  stopGameplay();
}

function selectCard(card) {

  card.classList.remove("card-unselected");
  card.classList.add("card-selected");
  setCardBackground(card);

}

function unselectCard(card) {

  card.classList.remove("card-selected");
  card.classList.add("card-unselected");
  clearCardBackground(card);

}

function isMatch() {

  var selection1Type = document.getElementById(selection1).getAttribute("data-card-label");
  var selection2Type = document.getElementById(selection2).getAttribute("data-card-label");

  return (selection1Type === selection2Type);
}

// === timer ===============================================

function startTimer() {
  var count = 45;
  gameTimer = setInterval(function () {
 
    document.getElementById('timer-counter').innerHTML = --count;

    if (count === 0) {
      stopGameplay();
    }
  }, 1000);
}
