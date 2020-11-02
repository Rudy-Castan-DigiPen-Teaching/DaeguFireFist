function thr() {
  
  if(signal % 3 == 0) {
    PLAYER = loadImage('Image/penguin 2.png');
  }
  
}

function Pause() {
  
  if(pause % 2 == 0) {
    
  } else if(pause % 2 == 1) {
    push();
    rectMode(CENTER);
    fill(0);
    strokeWeight(3);
    stroke(0);
    rect(width / 2, height / 2, width, height);
  }
  
}