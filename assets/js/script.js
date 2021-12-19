// let timeSecond = 60;
// const timeH = document.querySelector("#timer");

// displayTime(timeSecond);

// const countDown = setInterval(() => {
//   timeSecond--;
//   displayTime(timeSecond);
//   if (timeSecond == 0 || timeSecond < 1) {
//     endCount();
//     clearInterval(countDown);
//   }
// }, 1000);

// function displayTime(second) {
//   const min = Math.floor(second / 60);
//   const sec = Math.floor(second % 60);
//   timeH.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
// }

// function endCount() {
//   timeH.innerHTML = "Sorry, time is up!";
// }

//=== game board functions =================================
var selection1 = null;
var selection2 = null;
var gameLevel = null;

//--- game play -----------------------------
function cardClicked(event) {

  var card = event.target;

  //ignore click if already selected
  if (card.classList.contains("card-selected")) {
    return;
  }

  if (selection1 == null && selection2 == null) { //the first select
    selection1 = card.getAttribute("id");
    selectCard(selection1);
  } else if (selection1 != null && selection2 == null) { // the second select
    selection2 = card.getAttribute("id");
    selectCard(selection2);
    if (isMatch()) {
      selection1 = null;
      selection2 = null;
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


function selectCard(cardId) {

  var card = document.getElementById(cardId);
  card.classList.remove("card-unselected");
  card.classList.add("card-selected");
  card.innerHTML = card.getAttribute("data-card-label");

}

function unselectCard(card) {

  card.classList.remove("card-selected");
  card.classList.add("card-unselected");
  card.innerHTML = card.getAttribute("");
}


function isMatch() {
  var selection1Type = document.getElementById(selection1).getAttribute("data-card-label");
  var selection2Type = document.getElementById(selection2).getAttribute("data-card-label");

  return (selection1Type === selection2Type);
}

//--- game setup -----------------------------
function renderBoard(level, size) {
  if (level==null) {
    return;
  }
  gameLevel = level;
  clearBoard();
  var gameBoard = document.getElementById("game-board");
  for (var i = 0; i < size; i++) {
    //<div id="card1"  onclick="cardClicked(eventclass="card")"></div>
    var card = document.createElement("div");
    card.setAttribute("id", "card" + i);
    card.setAttribute("class", "card");
    card.setAttribute("onclick", "cardClicked(event)");
    gameBoard.appendChild(card);
  }
}

function clearBoard() {
  var cards = document.getElementsByClassName("card");
  var gameBoard = document.getElementById("game-board");
  for (var card of cards) {
    gameBoard.removeChild(card);
  }
}

function setupBoard() {

  var cards = document.getElementsByClassName("card");
  for (var card of cards) {
    unselectCard(card);
  } 
  createCards();
}

function unselectCard(card) {
  card.classList.remove("card-selected");
  card.classList.add("card-unselected");
  card.innerHTML = card.getAttribute("");
}

function createCards() {
  var cards = Array.from(document.getElementsByClassName("card"));
  var cardPairs = cards.length / 2;
  var cardIndex = 0;

  for (var i = 0; i < cardPairs; i++) {
    cardIndex = Math.floor(Math.random() * cards.length);
    createCard(cards[cardIndex], gameLevel + "_" + i);
    cards.splice(cardIndex, 1);
    cardIndex = Math.floor(Math.random() * cards.length);
    createCard(cards[cardIndex], gameLevel + "_" + i);
    cards.splice(cardIndex, 1);
  }

}

function createCard(card, dataLabel) {
  card.setAttribute("data-card-label", dataLabel);
  // card.style.backgroundImage = "url('/assets/images/questions.jpg')"; 
  // var img = document.createElement("IMG");
  // img.src = "/assets/images/questions.jpg"

  // card.appendChild(img);

}