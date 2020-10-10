function preload(){
  Stadium = loadImage('Image/Stadium.png')
  Ball = loadImage('Image/Ball.png')
  Player_I = loadImage('Image/Player1.png')
}

function setup() {
  createCanvas(750,600);
  
  Stadium.loadPixels();
  Player_I.loadPixels();
  
  PLAYER = new Player();
}

function draw() {
  
  background(Stadium);

  this.PLAYER.draw();
  this.PLAYER.key_is_down();

}