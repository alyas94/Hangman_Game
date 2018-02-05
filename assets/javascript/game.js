// this JS file connects to index.html & runs the hangman game

//initalize variables:
var words = ["example", "another", "words", "different"
,"something", "new", "current", "random"];
var guess; //letter user has guessed
var guessesRemaining = 13; //starts at 13 and will decrease
var answer = ""; //the correct answer,, will be _ _ _ initially
var alreadyGuessed = ""; //Letters The User Has Already Guessed

//this will find random word from words array 
var randomWord = words[Math.floor(Math.random()*words.length)]
console.log(randomWord);

//take random word and put _ _ _ in its place
var remainingLetters = randomWord.length;
console.log(remainingLetters);
for (var i = 0; i < randomWord.length; i++) {
	answer = answer + "_"
}
console.log(answer)
//display "_ _ _ _ _"
var WordDiv = document.getElementById("emptyCurrentWord");
	WordDiv.innerHTML = answer;

	//gets users guess from keyboard
document.onkeyup = function(event) {
	guess = event.key;
	console.log(guess);
	if(remainingLetters > 0){
		// BOOLEAN, if true, its a repeat guess
		var repeatGuess = false; 
		for(var i = 0; i < randomWord.length; i++){
			if(alreadyGuessed[i] === guess){
				repeatGuess = true;
				console.log("repeat guess: " + repeatGuess);
			}
		} // ^^if its a repeat guess, if Statement below wont run

		//for loop to check if guess is correct
		if(repeatGuess == false){
			for (var j = 0; j < randomWord.length; j++){
				if(randomWord[j] === guess){
					answer[j] = guess;
					console.log("CORRECT GUESS");
					remainingLetters --;
					console.log("letters left to guess: " + 
						remainingLetters);
					alreadyGuessed = alreadyGuessed + guess;
					console.log("letters already guessed: " 
						+ alreadyGuessed);
				}
			}
		}
	}
}
	// if guessedLetter didnt appear in answer add it to alreadyGuessed

// examples:
// var targetDiv = document.getElementById("guessedLetter");
//       targetDiv.innerHTML = "Hello friends!";

// var newDiv = document.getElementById("guessedLetter");
// 	newDiv.innerHTML = "Hi Friends!";


// for (var i = 0; i < drinkList.length; i++) {

//       // For each drink in the array, we create a new placeholder div.
//       // This placeholder will get overwritten with each iteration of the loop.
//       var newDrinkDiv = document.createElement("div");

//       // We then assign the the value of this placeholder div to be the text in the array.
//       newDrinkDiv.innerHTML = drinkList[i];

//       // We then add the placeholder div to the our main div on the page ("#drink-options")
//       drinkDiv.appendChild(newDrinkDiv);
//     }