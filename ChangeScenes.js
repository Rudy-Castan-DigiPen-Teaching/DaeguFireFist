function keyReleased() {

	if(CurrentScene == Game1 || CurrentScene == Game2) {
		if(keyCode == 27) {
			CurrentScene = Pause_Screen;
		}
	}

	if(CurrentScene == Main_Menu) {
		if(KeyCode == 13) {
			CurrentScene = Game1;
		}
	}

	if(CurrentScene == Game1) {
		if(KeyCode == 13) {
			CurrentScene = Game2;
		}
	}
}