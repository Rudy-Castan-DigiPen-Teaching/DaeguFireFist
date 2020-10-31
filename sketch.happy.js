var RO;
var LO;
var A = 0;
var Osize = 40;
var timeleft = 30;
var startTime = 0;
var currentTime = 0;

function preload() {
  Stadium = loadImage('Image/Stadium.png')
  Ball = loadImage('Image/Ball.png')
  Crowd_C = loadImage('Image/Crowd_Center.JPG')
  Player_I = loadImage('Image/Player1.png')
  Rlarva = loadImage('Right.gif')
  Llarva = loadImage('Left.gif')
  Rival_I = loadImage('Rival.png');
}

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ':' + nf(sec, 2);
}

function setup() {
  createCanvas(750, 600);

  startTime = millis();

  var params = getURLParams();
  console.log(params);
  if (params.minute) {
    var min = params.minute;
    timeleft = min * 60;
  }

  var timer = select('#timer');
  timer.html(convertSeconds(timeleft - currentTime));

  var interval = setInterval(timeIt, 1000);

  Stadium.loadPixels();
  Player_I.loadPixels();
  Crowd_C.loadPixels();
  Rival_I.loadPixels();

  PLAYER = new Player();
  RO = new Robstacle();
  LO = new Lobstacle();
  Rival = new AI(width / 2, 185);

  function timeIt() {
    currentTime = floor((millis() - startTime) / 1000);
    timer.html(convertSeconds(timeleft - currentTime));
    if (currentTime == timeleft) {

      clearInterval(interval);
      //counter = 0;
    }
  }
}


function draw() {

  background(Stadium);

  image(Crowd_C, 195, 40, 360, 35)
  image(Crowd_C, 195, 75, 360, 35)

  this.PLAYER.draw();
  this.PLAYER.key_is_down();

  Rival.draw();
 
  if (currentTime == timeleft) {
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

function mouseClicked() {

  if (mouseButton == LEFT) {
    console.log(mouseX, mouseY);
  }

}