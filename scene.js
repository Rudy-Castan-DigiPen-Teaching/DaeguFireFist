const Main_Menu = 1;
const Pause_Screen = 2;
const Game1 = 3;
const Game2 = 4;

var signal = 0;

class PauseScreen {
	constructor() {

	}

	update() {

	}

	draw() {

		push();
		rectMode(CENTER);
		strokeWeight(2);
		stroke(0);
		fill(0);
		rect(width / 2, height / 2, width / 2, height / 2);
		pop();

		push();
		imageMode(CENTER);
		image(PauseText, width / 2, height / 2);
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