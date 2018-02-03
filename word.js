var letters = require("./letters.js");

var spaceHolder = [];
var gameWord = "";

var placeHolder = function(gameWord){
	var letterStorage = [];
	for (var i = 0; i < gameWord.length; i++){
		letterStorage.push(new letters(gameWord.charAt(i)));
	}
	return letterStorage;
	} 

var HangmanWord = function(gameWord){
	this.gameWord = gameWord;
	this.letterStorage = placeHolder(this.gameWord);
	this.found = false;
	
	// console.log("Here's our gameWord in the word constructor: " + this.gameWord);


	HangmanWord.prototype.checkIfLetterFound = function(guessLetter){
			var whatToReturn = false;
			for (var i=0; i < this.letterStorage.length; i++){
				whatToReturn |= this.letterStorage[i].updateGuessedLetter(guessLetter);
				
			} return whatToReturn;
		
		}

	HangmanWord.prototype.checkIfWordFound = function(){
		var whatToReturn = true;
			for (var i=0; i < this.letterStorage.length; i++){
				whatToReturn &= this.letterStorage[i].usedLetter;
			} return whatToReturn;
		
		}

	HangmanWord.prototype.displayWord = function(){
		
		var string1 = "";
		for (var i = 0; i < this.letterCollection.length; i++){
			string1 += " " + this.letterCollection[i].displayLetter();
		
		}
		return string1;
	}
}
	


module.exports = HangmanWord;