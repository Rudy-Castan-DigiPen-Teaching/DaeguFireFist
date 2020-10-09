class Robstacle{
  constructor(){
    this.x = 0;
    this.y = height/2;
    this.speed = 7;
    this.size=50;
  }
  
  draw(){
    image(Rlarva,this.x,this.y,this.size,this.size);
  }
  
  move(){
      this.x=this.x+this.speed;
  }
}