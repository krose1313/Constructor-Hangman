var letters = function (guessedLetter) {
	//string that will hold underlying letter guessed by user
	this.guessedLetter = guessedLetter 
	//boolean that stores whether the letter has been guessed yet by the user
	this.usedLetter = false 
	this.displayLetter = function() {
	  	if (this.usedLetter === false){
	  		return "_";
	  	}else {
	  		return this.guessedLetter;
	  	}
	  }
	this.updateGuessedLetter = function(wordLetter) {
	  	//function that returns underlying char if correct or _ if not
	  	var matched = this.guessedLetter.toLowerCase() === wordLetter.toLowerCase();
	  	if (matched){
	  		this.usedLetter = true;
	  	} return matched;	  	  	
	}
};

module.exports = letters;
