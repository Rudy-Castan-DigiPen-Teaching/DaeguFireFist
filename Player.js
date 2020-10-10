class Player {
  constructor(){
    this.x = 300;
    this.y = 540;
  }
    
  draw(){
    push()
    imageMode(CENTER);
    image(Player_I, this.x, this.y, 80,80);
    pop()
    }
  
  key_is_down(){
    if (keyIsDown(LEFT_ARROW)){
      this.x -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)){
      this.x += 3;
    }
  }
}