class Fruit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    context.fillStyle = "#FF0000";
    context.fillRect(this.x, this.y, gridSize, gridSize);
  }

  beEaten() {

    // Changes position of the fruit, to seem like the fruit was eaten and a new fruit was generated
    this.x = randomInt(0, (canvas.width - gridSize) / gridSize) * gridSize;
    this.y = randomInt(0, (canvas.height - gridSize) / gridSize) * gridSize;

    // Draws the fruit again, so "new" fruit appears in the same frame
    this.draw();
  }
}
