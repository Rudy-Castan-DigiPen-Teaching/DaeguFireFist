class Balls{
  
  constructor(x, y, size) {
    
    this.x = x;
    this.y = y;
    this.s = size;
    this.d = -1;
    
  }
  
  update() {
   
    this.s = map(this.y, 495, 210, 64, 32);
    ballsize = this.s;
    
  }
  
  draw() {
    push();
    image(Ball, this.x, this.y, this.s, this.s);
    pop();
  }

  throw() {
    
    if(throwkey == 1) {
      this.y = this.y * this.d;
    }
    
    if(this.y > 0) {
      this.x = map(this.y, 210, 495, this.x, this.x - 140/this.y);
    } else if(this.y < 0) {
      this.x = map(this.y, 210, 495, this.x, this.x + 140/this.y);
    }
    
  }
  
  
  
}