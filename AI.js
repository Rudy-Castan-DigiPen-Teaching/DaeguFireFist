class AI {

  constructor(x, y) {

    this.x = x;
    this.y = y;
    this.speed = 2;
    //this.ball = new Ball();

  }

  /*update() {
    if (this.ball.y == 210) {
      if (this.ball.x > 225 && this.ball.x < this.x) {
        while (this.ball.x < this.x);
        this.x -= this.speed;
      } else if (this.ball.x < 520 && this.ball.x > this.x) {
        while (this.ball.x > this.x);
        this.x += this.speed;
      }
    }

  }*/
  
  draw() {
    push();
    imageMode(CENTER);
    image(RIVAL, this.x, this.y, 100, 100);
    pop();
  }

}