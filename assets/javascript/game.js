
//  VARIABLES
// ========================================================================

	// the object words for the hangman game (here the theme is ducks)
	var words = ["mallard", "gadwall", "wigeon", "canvasback", "wood"];
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	// Game starts with a score of 0
	var score = 0;



//  FUNCTIONS
// ========================================================================

	var game = {

		start: function() {
			// randomly assigns a value from the ducks array to the variable "duck"
			var word = ducks[Math.floor(Math.random() * ducks.length)]
			var wrongLetters = []

		}



		userGuess: function() {
			// when the user presses a key it will run the following function which stores the into a variable
			document.onkeyup = function(event) {
				var userInput = event.key;
				var userInputIndex = letters.indexof(userInput);
			// function checks whether or not the userInput is present in this.duck

			// if it is, reveals the userInput within this.duck

			// else, 
				// decreases #remainingGuesses by 1
				// adds userInput letter to this.wrongLetters
				// runs function to update #wrongLetters innerHTML w
			
			}
		}
	}


	// function to update score
	function updateScore() {
		document.querySelector("#score").innerHTML = "Score: " + score;
	}

//  MAIN PROCESS
// ========================================================================

	


