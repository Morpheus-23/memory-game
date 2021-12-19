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

