class AI {

  constructor(x, y) {

    this.x = x;
    this.y = y;
    this.speed = 2;
    //this.ball = new Balls(225, 210);
    this.bump = 0;
    this.img = Rival_I;

  }

  /*move() {
    if (this.ball.y == 210) {
      if (this.ball.x > 225 && this.ball.x < this.x) {
        while (this.ball.x < this.x);
        this.x -= this.speed;
      } else if (this.ball.x < 520 && this.ball.x > this.x) {
        while (this.ball.x > this.x);
        this.x += this.speed;
      }
    }

  }

  throw () {

    if (this.y == this.ball.y) {

      if (this.x == this.ball.x + this.ball.s / 2 || this.x == this.ball.x - this.ball.s / 2) {
      
      }
    }

  }*/
  
  imagemode() {
    
    if(this.bump == 1) {
      img = Rival_B;
    } /*else if (this.thr == 1) {
      img = Rival_T;
    }*/ else {
      imv = Rival_I;
    }
    
  }

  draw() {
    push();

    imageMode(CENTER);

    if (this.bump == 1) {
      image(this.img, this.x, this.y, 50, 50);
    } else {
      image(this.img, this.x, this.y, 50, 50);
    }

    pop();
  }

}