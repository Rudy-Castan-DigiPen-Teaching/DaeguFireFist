class Robstacle {
  constructor() {
    this.x = width / 5;
    this.y = height / 2;
    this.speed = 3;
    this.size = 60;
  }

  draw() {
    image(Rlarva, this.x, this.y, this.size, this.size);
  }

  move() {
    this.x = this.x + this.speed;
  }
}

class Lobstacle {
  constructor() {
    this.x = width / 5 * 4 - 50;
    this.y = height / 2;
    this.speed = 3;
    this.size = 60;
  }

  draw() {
    image(Llarva, this.x, this.y, this.size, this.size);
  }

  move() {
    this.x = this.x - this.speed;
  }
}