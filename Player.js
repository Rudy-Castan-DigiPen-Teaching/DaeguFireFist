class Player {
  constructor() {
    this.x = width / 2;
    this.y = height - 200;
    this.s = 5;

  this.b1 = new Ball(525, 495);
  this.b2 = new Ball(698.75, 495);
  this.b3 = new Ball(872.5, 495);
  this.b4 = new Ball(1049.25, 495);
  this.b5 = new Ball(1220, 495);
  this.b6 = new Ball(190, 1200);
  this.b7 = new Ball(531.25, 1200);
  this.b8 = new Ball(872.5, 1200);
  this.b9 = new Ball(1213.75, 1200);
  this.b10 = new Ball(1555, 1200);
    
  }

  draw() {
    push()
    imageMode(CENTER);
    image(PLAYER, this.x, this.y, 180, 180);
    pop()
  }

  update() {

    if (this.x < 200 || this.x > width - 200) {
      this.s = 0;
    }

    if (keyIsDown(LEFT_ARROW)) {
      if (this.x > 200 && this.x <= width - 200) {
        this.s = 5;
        this.x -= this.s;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (this.x >= 200 && this.x < width - 200) {
        this.s = 5;
        this.x += this.s;
      }
    }
  }

}