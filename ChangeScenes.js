function keyReleased() {

	if(CurrentScene == Game1) {
		if(keyCode == 27) {
			CurrentScene = Pause_Screen;
			signal = 1;
		}
	}

	if(CurrentScene == Game2) {
		if(keyCode == 27) {
			CurrentScene = PauseScreen;
			signal = 2;
		}
	}

	if(CurrentScene == Main_Menu) {
		if(keyCode == 13) {
			CurrentScene = Game1;
		}
	}

	if(CurrentScene == Game1) {
		if(keyCode == 13) {
			CurrentScene = Game2;
		}
	}

	if(CurrentScene == Pause_Screen && signal == 1) {
		if(keyCode == 27) {
			CurrentScene == Game1;
		}
	}

	if(CurrentScene == Pause_Screen && signal == 2) {
		if(keyCode == 27) {
			CurrentScene == Game2;
		}
	}
}