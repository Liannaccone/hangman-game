
//  VARIABLES
// ========================================================================

	// the object words for the hangman game (here the theme is ducks)
	var ducks = ["mallard","green winged teal", "northern pintail", "gadwall", "wigeon", "canvasback", "wood"]
	


//  FUNCTIONS
// ========================================================================




	// function to update score
	function updateScore() {
		document.querySelector("#score").innerHTML = "Score: " + score;
	}