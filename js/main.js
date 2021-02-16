const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

const gridSize = 10;

const DirectionEnum = {
  Up: 0,
  Down: 1,
  Right: 2,
  Left: 3
}

let snake;
let fruit;

function startGame() {

  // Colors the game area with black
  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Creates the snake and the first fruit
  fruit = new Fruit(randomInt(0, (canvas.width - gridSize) / gridSize) * gridSize, randomInt(0, (canvas.height - gridSize) / gridSize) * gridSize);
  snake = new Snake(randomInt(0, (canvas.width - gridSize) / gridSize) * gridSize, randomInt(0, (canvas.height - gridSize) / gridSize) * gridSize);

  //Starts the game loop
  updateGame();
}

function updateGame() {

  // Clears the screen with black, to erase previous frame
  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Updates the fruit, and draws it again
  fruit.draw();

  // Updates the snake, and draws it again
  snake.update();
  snake.draw();

  // Controls the snake's speed and fps of the game
  window.setTimeout(updateGame, 1000 / snake.speed);
}

window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace("Arrow", "");
  snake.changeDirection(direction);
}));

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
