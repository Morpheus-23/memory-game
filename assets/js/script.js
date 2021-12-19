let timeSecond = 60;
const timeH = document.querySelector("#timer");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Sorry, time is up!";
}

//=== game board functions =================================



function renderBoard(size) {
  for (var i = 0; i < size; i++) {
      var gameBoard = document.getElementById("game-board");
      //<div id="card1" class="card" onclick="cardClicked(event)"></div>
      var card = document.createElement("div");
      card.setAttribute("id", "card"+i);
      card.setAttribute("class", "card");
      card.setAttribute("onclick", "cardClicked(event)");
      gameBoard.appendChild(card);
  }
}

function resetBoard() {

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
      createCard(cards[cardIndex], "easy_" + i);
      cards.splice(cardIndex, 1);
      cardIndex = Math.floor(Math.random() * cards.length);
      createCard(cards[cardIndex], "easy_" + i);
      cards.splice(cardIndex, 1);
  }

}

function createCard(card, dataLabel) {
  card.setAttribute("data-card-label", dataLabel);

}