var k = 0;

class Ball {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 75;
    this.xSpeed = 5;
    this.ySpeed = 5;
    this.z = 0;
  }

  draw() {
    push();
    imageMode(CENTER);
    image(BALL, this.x, this.y, this.r, this.r);
    pop();
  }

  update() {

    this.r = map(this.y, 495, 1160, 50, 100);

    if (this.y == 495) {
      this.z = 1;
    } else if (this.y == 1160) {
      this.z = 2;
    }

    switch (this.z) {
      case 1:
        this.ySpeed = 5;
        this.y += this.ySpeed;
        if (this.y == 1160) {
          this.ySpeed = 0;
        }
        break;

      case 2:
        this.ySpeed = 5;
        this.y -= this.ySpeed;
        if (this.y == 495) {
          this.ySpeed = 0;
        }
        break;
    }

    if (this.x < 872.5 && this.z == 2) {
      this.x = this.x + map(this.y, 495, 1160, 0, 4);
    } else if (this.x > 872.5 && this.z == 2) {
      this.x = this.x - map(this.y, 495, 1160, 0, 4);
    }

    if (this.x < 872.5 && this.z == 1) {
      this.x = this.x - map(this.y, 495, 1160, 4, 0);
    } else if (this.x > 872.5 && this.z == 1) {
      this.x = this.x + map(this.y, 495, 1160, 4, 0);
    }
  }

}

function keyReleased() {

  k += 1;

}

function ballMove() {

  if (B1.y == 495) {
    if (isKeyPressed === true) {
      B1.ySpeed = 5;
    } else {
      B1.ySpeed = 0;
    }
  } else if (B1.y == 1160) {
    if (isKeyPressed === true) {
      B1.ySpeed = 5;
    } else {
      B1.ySpeed = 0;
    }
  }

}