var timeleft = 30;
var startTime = 0;
var currentTime = 0;
var A = 0;
var RO;
var LO;
var Osize = 80;

var score = 0;
var signal = 0;
var pause = 0;

function preload() {
  STADIUM = loadImage('Image/stadium.png');
  BALL = loadImage('Image/balls.png');
  TABLE = loadImage('Image/table.png');
  Rlarva = loadImage('Image/Right.gif');
  Llarva = loadImage('Image/Left.gif');
  RIVAL = loadImage('Image/rival.png');
  RIVAL_B = loadImage('Image/rival bump.gif');
  TIMER = loadImage('Image/timer.gif');
  PLAYER = loadImage('Image/penguin 1.png');
  SCORE = loadImage('Image/sc 0-0.png');
}

function setup() {
  createCanvas(1750, 1500);

  RO = new Robstacle();
  LO = new Lobstacle();
  P = new Player();
  R = new AI(width / 2, 445);
  
  B1 = new Ball(525, 495);
  B2 = new Ball(698.75, 495);
  B3 = new Ball(872.5, 495);
  B4 = new Ball(1049.25, 495);
  B5 = new Ball(1220, 495);
  B6 = new Ball(190, 1200);
  B7 = new Ball(531.25, 1200);
  B8 = new Ball(872.5, 1200);
  B9 = new Ball(1213.75, 1200);
  B10 = new Ball(1555, 1200);

  STADIUM.loadPixels();
  TABLE.loadPixels();
  TIMER.loadPixels();
  SCORE.loadPixels();

  //timer
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

  function timeIt() {
    currentTime = floor((millis() - startTime) / 1000);
    timer.html(convertSeconds(timeleft - currentTime));
    if (currentTime == timeleft) {

      clearInterval(interval);
    }
  }

}

function draw() {
  background(STADIUM);

  push();

  imageMode(CENTER);
  image(TABLE, width / 2, height / 2 + 100);

  push();
  scale(0.5);
  image(TIMER, width, 630);
  pop();
  
  image(SCORE, width - 250, height / 2 - 50);

  pop();

  //Rival
  R.draw();
  
  //Ball
  B1.update();
  B1.draw();
  
  B2.update();
  B2.draw();
  
  B3.update();
  B3.draw();
  
  B4.update();
  B4.draw();
  
  B5.update();
  B5.draw();
  
  B6.update();
  B6.draw();
  
  B7.update();
  B7.draw();
  
  B8.update();
  B8.draw();
  
  B9.update();
  B9.draw();
  
  B10.update();
  B10.draw();

  //player
  P.update();
  P.draw();

  //obstacle
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

  if (this.LO.x <= width / 5) {
    A = 0;
    this.LO.x = width / 5 * 4 - Osize
  }
  if (this.RO.x >= width / 5 * 4 - Osize) {
    A = 1;
    this.RO.x = width / 5
  }
  
  //scoreboard
  if(score == 1) {
    SCORE = loadImage('Image/sc 0-1.png');
    score += 0.5;
  } else if(score == 3) {
    SCORE = loadImage('Image/sc 0-2.png');
    score += 0.5;
  }

}

function keyPressed() {
  if(keyCode == 90) {
    signal += 1;
  }
  
  if(keyCode == 27) {
    pause += 1;
  }
}

function mouseClicked() {
  score += 1;
}