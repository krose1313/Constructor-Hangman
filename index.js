var inquirer = require("inquirer");
var prompt = require("prompt");
var HangmanWord = require("./word.js");
var letters = require("./letters.js");

prompt.start();

	console.log("Hello and Hello Again!");

var newGame = function(){
	this.possibleWords = ["BONJOUR", "HOLA", "CIAO", "HELLO", "NAMASTE", "SALAAM", "JAMBO"];
	this.guessesRemaining = 10;
	this.currentWrd = null;
	this.correctLetter = [];
	this.incorrectLetter = [];
	this.Wins = 0;
	this.Losses = 0;
	this.startGame = function(wrd){
		var chosenWord = this.possibleWords[Math.floor(Math.random() * this.possibleWords.length)];
		this.currentWrd = new HangmanWord(chosenWord);
		this.askUser();
	}

	this.askUser = function(){

		var self = this;

		if (self.currentWrd.checkIfWordFound()){
					console.log("You won!!!");
					return 1;
				} else {
		
		prompt.get(["guessLetter"], function(err,result){
			
    
			console.log("The letter you guessed is " + result.guessLetter);

			var howManyDidUserGuessSoFar = self.currentWrd.checkIfLetterFound(result.guessLetter);
		
			if (!howManyDidUserGuessSoFar){
				console.log("You got it wrong!");
				self.guessesRemaining -= 1;
				console.log("Guesses remaining: " + self.guessesRemaining);
			} else {
				console.log("You guessed right!");
				}

			if (self.guessesRemaining > 0 || self.currentWrd === false){
				self.askUser();
			} else if (self.guessesRemaining === 0){
				console.log("Sorry, the game is over!" + self.currentWrd.chosenWord);
				console.log(self.currentWrd.displayWord());
			} 
	
			console.log(self.currentWrd.displayWord());
			
			});
	}
}
}

var game1 = new newGame();
game1.startGame();