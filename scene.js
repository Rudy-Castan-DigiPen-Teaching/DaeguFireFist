const Main_Menu = 1;
const Pause_Screen = 2;
const Game1 = 3;
const Game2 = 4;

const Win = 1;
const Lose = 2;
const Draw = 3;

var STsignal = 0;

var st1 = 0;

class PauseScreen {
	constructor(width, height) {
		x = width;
		y = height;
	}

	update() {
		signal = 2;
	}

	draw() {

		push();
		rectMode(CENTER);
		strokeWeight(2);
		stroke(0);
		fill(0);
		rect(this.x / 2, this.y / 2, this.x / 2, this.y / 2);
		pop();

		push();
		imageMode(CENTER);
		image(PauseText, this.x / 2, this.y / 2);
		pop();

	}
}

class Stage1 {
  
  constructor() {
    
  }
  
  update() {
    
  }
  
  draw() {
    
  }
  
}

class Stage2 {

	constructor() {

	}

	update() {

	}

	draw() {

	}

}