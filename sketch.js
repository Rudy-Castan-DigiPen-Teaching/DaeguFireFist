var RO;
var LO;
var A = 0;
var Osize = 40;
var throwkey = 0;
var ballsize = 64;

let CurrentScene = Main_Menu;

function preload() {
  Stadium = loadImage('Image/Stadium.png')
  Ball = loadImage('Image/Ball.png')
  Crowd_C = loadImage('Image/Crowd_Center.JPG')
  Player_I = loadImage('Image/Player1.png')
  Rlarva = loadImage('Right.gif')
  Llarva = loadImage('Left.gif')
  Rival_I = loadImage('Rival.png');
  Rival_B = loadImage('Rival bump.gif');
  Main = loadImage('Image/mainscreen.png');
  PauseText = loadImage('Image/pause.png');
  //Rival_T = loadImage('');
}

function setup() {
  createCanvas(750, 600);

  Main.loadPixels();

  Stadium.loadPixels();
  Player_I.loadPixels();
  Crowd_C.loadPixels();
  Rival_I.loadPixels();

  PLAYER = new Player();
  RO = new Robstacle();
  LO = new Lobstacle();
  Rival = new AI(width / 2, 185);
  B = new Balls(0, 0);
  B1 = new Balls(225, 210 - ballsize / 2);
  B2 = new Balls(290.75, 210 - ballsize / 2);
  B3 = new Balls(356.5, 210 - ballsize / 2);
  B4 = new Balls(422.25, 210 - ballsize / 2);
  B5 = new Balls(488, 210 - ballsize / 2);
}

function draw() {

  background(Stadium);

  image(Crowd_C, 195, 40, 360, 35)
  image(Crowd_C, 195, 75, 360, 35)

  this.PLAYER.draw();
  this.PLAYER.key_is_down();

  Rival.draw();
  
  B1.draw();
  B2.draw();
  B3.draw();
  B4.draw();
  B5.draw();

  switch (A) {
    case 0:
      RO.draw()
      RO.move()
      break;
    case 1:
      LO.draw()
      LO.move()
      break;
  }
  if (this.LO.x <= width / 4) {
    A = 0;
    this.LO.x = width / 4 * 3 - Osize
  }
  if (this.RO.x >= width / 4 * 3 - Osize) {
    A = 1;
    this.RO.x = width / 4
  }
}

function signal() {

  if (keyIsPressed === true) {
    
    if (keyCode == 90 || keyCode == 88) {
      throwkey = 1;
    } else {
      throwkey = 0;
    }
  }

}

/*function StartScreen() {
  
}*/

function KeyPressed() {
  if(keyCode == 13) {
    CurrentScene = Game;
  }
}

function mouseClicked() {

  if (mouseButton == LEFT) {
    console.log(mouseX, mouseY);
  }

}