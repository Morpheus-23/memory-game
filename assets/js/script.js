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
    selectCard(card);
  } else if (selection1 != null && selection2 == null) { // the second select
    selection2 = card.getAttribute("id");
    selectCard(card);
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


function selectCard(card) {

  // var imageUrl = "/assets/images/" + card.getAttribute("data-card-label") + ".jpg";
  // console.log("imageUrl: " + imageUrl);
  // $(".card-selected").css("background-image", "url(" + imageUrl + ")");

  // var card = document.getElementById(cardId);
  card.classList.remove("card-unselected");
  card.classList.add("card-selected");
  setCardBackground(card);
  // var dataLabel = card.getAttribute("data-card-label");
  // card.innerHTML = dataLabel;
  // var dataIndex = card.getAttribute("data-card-index");
  // alert("card-img" + dataIndex);
  // var cardImg = document.getElementById("card-img" + dataIndex);
  // cardImg.src = "/assets/images/" + dataLabel + ".jpg"

}

function unselectCard(card) {

  // var imageUrl = "/assets/images/questions.jpg";
  // $(".card-unselected").css("background-image", "url(" + imageUrl + ")");

  card.classList.remove("card-selected");
  card.classList.add("card-unselected");
  clearCardBackground(card);
  // card.innerHTML = card.getAttribute("");
  // var dataIndex = card.getAttribute("data-card-index");
  // alert("card-img" + dataIndex);
  // var cardImg = document.getElementById("card-img" + dataIndex);
  // cardImg.src = "/assets/images/questions.jpg"


}


function isMatch() {
  var selection1Type = document.getElementById(selection1).getAttribute("data-card-label");
  var selection2Type = document.getElementById(selection2).getAttribute("data-card-label");

  return (selection1Type === selection2Type);
}

//--- game setup -----------------------------
function renderBoard(level, size) {
  if (level == null) {
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
    card.setAttribute("data-card-index", i);
    // card.setAttribute("data-card-label", level + "_" + index);
    // var img = document.createElement("IMG");
    // img.setAttribute("id", "card-img" + i);
    // img.src = "/assets/images/1x1.png";
    // card.appendChild(img);
    gameBoard.appendChild(card);
  }
}

function clearBoard() {
  // var cards = document.getElementsByClassName("card");
  var gameBoard = document.getElementById("game-board");
  while(gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }
  // for (var card of cards) {
  //   gameBoard.removeChild(card);
  // }
}

function setupBoard() {

  var cards = document.getElementsByClassName("card");
  for (var card of cards) {
    unselectCard(card);
  }
  createCards();
}

function createCards() {
  var cards = Array.from(document.getElementsByClassName("card"));
  var cardPairs = cards.length / 2;
  var cardIndex = 0;

  for (var i = 0; i < cardPairs; i++) {
    cardIndex = Math.floor(Math.random() * cards.length);
    // createCard(cards[cardIndex], cardIndex);
    cards[cardIndex].setAttribute("data-card-label", gameLevel + "_" + i);
    cards.splice(cardIndex, 1);
    cardIndex = Math.floor(Math.random() * cards.length);
    // createCard(cards[cardIndex], cardIndex);
    cards[cardIndex].setAttribute("data-card-label", gameLevel + "_" + i);
    cards.splice(cardIndex, 1);
  }

}

function createCard(card, index) {
  card.setAttribute("data-card-label", gameLevel + "_" + index);
  // card.setAttribute("data-card-index", index);

}

// background-image: url("/assets/images/questions.jpg");
// background-size: 99%;
// background-repeat: no-repeat;
// background-position: center;
function setCardBackground(card) {
  var imageUrl = "url(/assets/images/" + card.getAttribute("data-card-label") + ".jpg)";
  console.log("imageUrl : " + imageUrl);
  card.style.backgroundImage = imageUrl;
  card.style.backgroundSize = "99%";
  card.style.backgroundRepeat = "no-repeat";
  card.style.backgroundPosition = "center";
}

function clearCardBackground(card) {
  var imageUrl = "url(/assets/images/questions.jpg)";

  card.style.backgroundImage = imageUrl;
  card.style.backgroundSize = "99%";
  card.style.backgroundRepeat = "no-repeat";
  card.style.backgroundPosition = "center";
}