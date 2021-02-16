class Snake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = undefined;
    this.speed = 5; // also fps of the game
    this.total = 0;
    this.tail = [];
  }

  draw() {

    // Changes the context to use white color
    context.fillStyle = "#FFFFFF";

    // Draws all of the snake's tail pieces
    for (let i = 0; i < this.tail.length; i++) {
      context.fillRect(this.tail[i].x, this.tail[i].y, gridSize, gridSize);
    }

    // Draws the snake head
    context.fillRect(this.x, this.y, gridSize, gridSize);
  }

  checkEat(fruit) {
    if (fruit.x === this.x && fruit.y === this.y) {
      fruit.beEaten();
      this.total++;
      this.speed++;
    }
  }

  checkDeath() {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.x = randomInt(0, (canvas.width - gridSize) / gridSize) * gridSize;
        this.y = randomInt(0, (canvas.width - gridSize) / gridSize) * gridSize;
        this.direction = undefined;
        this.speed = 5;
        this.total = 0;
        this.tail = [];
      }
    }
  }

  update() {

    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.total - 1] = {x: this.x, y: this.y};

    // Moves the snake according to it's direction
    switch (this.direction) {
      case DirectionEnum.Up:
        this.y -= gridSize;
        break;
      case DirectionEnum.Down:
        this.y += gridSize;
        break;
      case DirectionEnum.Left:
        this.x -= gridSize;
        break;
      case DirectionEnum.Right:
        this.x += gridSize;
        break;
      default:
        break;
    }

    // Checks if the snake goes outside the boarders, and moves the snake to the opposite side if it is
    if (this.x > canvas.width - gridSize) {
      this.x = 0;
    }
    if (this.y > canvas.height - gridSize) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = canvas.width - gridSize;
    }
    if (this.y < 0) {
      this.y = canvas.height - gridSize;
    }

    // Eat fruits if there is any
    this.checkEat(fruit);

    // Checks if the snake should die
    this.checkDeath();
  }

  changeDirection(direction) {

    // Changes direction of snake according to the arrow / key pressed
    switch (direction) {

      // Up arrow, W, or w
      case "Up":
        if (this.direction !== DirectionEnum.Down) {
          this.direction = DirectionEnum.Up;
        }
        break;
      case "W":
        if (this.direction !== DirectionEnum.Down) {
          this.direction = DirectionEnum.Up;
        }
        break;
      case "w":
        if (this.direction !== DirectionEnum.Down) {
          this.direction = DirectionEnum.Up;
        }
        break;

      // Down arrow, S, or s
      case "Down":
        if (this.direction !== DirectionEnum.Up) {
          this.direction = DirectionEnum.Down;
        }
        break;
      case "S":
        if (this.direction !== DirectionEnum.Up) {
          this.direction = DirectionEnum.Down;
        }
        break;
      case "s":
        if (this.direction !== DirectionEnum.Up) {
          this.direction = DirectionEnum.Down;
        }
        break;

      // Right arrow, D, or d
      case "Right":
        if (this.direction !== DirectionEnum.Left) {
          this.direction = DirectionEnum.Right;
        }
        break;
      case "D":
        if (this.direction !== DirectionEnum.Left) {
          this.direction = DirectionEnum.Right;
        }
        break;
      case "d":
        if (this.direction !== DirectionEnum.Left) {
          this.direction = DirectionEnum.Right;
        }
        break;

      // Left arrow, A, or a
      case "Left":
        if (this.direction !== DirectionEnum.Right) {
          this.direction = DirectionEnum.Left;
        }
        break;
      case "A":
        if (this.direction !== DirectionEnum.Right) {
          this.direction = DirectionEnum.Left;
        }
        break;
      case "a":
        if (this.direction !== DirectionEnum.Right) {
          this.direction = DirectionEnum.Left;
        }
        break;
    }
  }
}
