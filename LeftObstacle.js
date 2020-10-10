class Lobstacle{
  constructor(){
    this.x = width;
    this.y = height/2;
    this.speed = 7;
  }
  
  draw(){
    image(Llarva,this.x,this.y,50,50);
  }
  
  move(){
      this.x=this.x-this.speed;
  }
}