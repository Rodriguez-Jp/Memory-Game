let cards = [
  {
    name: "cheeseburger",
    img: "./images/cheeseburger.png",
  },

  {
    name: "fries",
    img: "./images/fries.png",
  },

  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },

  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },

  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },

  {
    name: "pizza",
    img: "./images/pizza.png",
  },

  {
    name: "cheeseburger",
    img: "./images/cheeseburger.png",
  },

  {
    name: "fries",
    img: "./images/fries.png",
  },

  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },

  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },

  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },

  {
    name: "pizza",
    img: "./images/pizza.png",
  },
];

const gridContainer = document.querySelector(".grid-container");
const scoreText = document.querySelector(".score");
const clearBtn = document.querySelector(".clear");
let cardChosen = [];
let cardChosenId = [];
let score = 0;

function createBoard() {
  //Sort the images array randomly
  cards.sort(() => Math.random() - 0.5);
  console.log(cards);

  for (let i = 0; i < 12; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.png");
    gridContainer.appendChild(card);
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  this.setAttribute("src", `${cards[cardId].img}`);
  cardChosen.push(cards[cardId].name);
  cardChosenId.push(this.getAttribute("data-id"));

  if (cardChosen.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const gridCards = document.querySelectorAll("img");

  if (cardChosen[0] === cardChosen[1]) {
    gridCards[cardChosenId[0]].setAttribute("src", "./images/white.png");
    gridCards[cardChosenId[1]].setAttribute("src", "./images/white.png");
    gridCards[cardChosenId[0]].removeEventListener("click", flipCard);
    gridCards[cardChosenId[1]].removeEventListener("click", flipCard);
    cardChosen = [];
    cardChosenId = [];
    score++;
    updateScore();
  } else {
    gridCards[cardChosenId[0]].setAttribute("src", "./images/blank.png");
    gridCards[cardChosenId[1]].setAttribute("src", "./images/blank.png");
    cardChosen = [];
    cardChosenId = [];
  }
}

function updateScore() {
  scoreText.innerText = score;
  if (score == 6) {
    alert("Has ganado!");
    score = 0;
    updateScore();
    clearBoard();
    createBoard();
  }
}

function clearBoard() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

clearBtn.addEventListener("click", () => {
  clearBoard();
  score = 0;
  updateScore();
  createBoard();
});

createBoard();
updateScore();
