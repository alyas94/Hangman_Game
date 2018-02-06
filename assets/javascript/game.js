// this JS file connects to index.html & runs the hangman game

//initalize variables:
var words = ["warriors", "patriots", "giants", "yankees"
,"steelers", "padres", "celtics", "cowboys", "pirates",
"lakers"];
var guessedRight = ""; //letters guessed correctly
var guess; //letter user has just guessed
var guessesRemaining = 13; //starts at 13 and will decrease
var answer = []; //the correct answer, will be _ _ _ initially
var guessedWrong = " "; //Letters User has guessed WRONG


//Pick a random word from the array:
var randomWord = words[Math.floor(Math.random()*words.length)]
console.log(randomWord);

//take the random word and put _ _ _ in its place
var remainingLetters = randomWord.length;
console.log(remainingLetters);
for (var i = 0; i < randomWord.length; i++) {
	answer[i] = "_";
}

//all the initial displays to the screen from our HTML file

//display "_ _ _ _ _"
var WordDiv = document.getElementById("emptyCurrentWord");
	WordDiv.innerHTML = answer.join('  ');
	/*NOTE: since answer is an array, when it is displayed
	 it will have ',' in between each letter. to prevent that
	 .join(' ') will replace the commas with a space. */

//display "Guesses Remaining: 13"
var GuessesDiv = document.getElementById("emptyGuessesLeft");
	GuessesDiv.innerHTML = guessesRemaining;

//display "Letters Already Guessed: "
var GuessedDiv = document.getElementById("emptyLettersGuessed");
	GuessedDiv.innerHTML = guessedWrong;

/* NOW we get users guess from keyboard
All Checking for the guess will be in this function */

document.onkeyup = function(event) { //starts when key is presed

	//take user guess & hold it in guess variable
	guess = event.key;
	console.log(guess);

	//as long as the user hasn't run out of guesses
	if(remainingLetters > 0){

		// repeatGuess, if true, user already guessed this
		var repeatGuess = false;

		//for loop to check if the user guessed this already
		for(var i = 0; i < randomWord.length; i++){
			//if guessedWrong OR guessedRight matches their current guess
			if(guessedWrong[i] === guess || guessedRight[i] === guess){
				//then it is a repeat guess
				repeatGuess = true;
				console.log("repeat guess: " + repeatGuess);
			}
		} //if its a repeat guess, if Statement below wont run


		// if its not a repeat guess:
		if(repeatGuess == false){

			var correctGuess = false; //conditional to be used later

			//for loop to check if guess is correct
			for (var j = 0; j < randomWord.length; j++){
				//if the users guess is correct
				if(randomWord[j] === guess){
					//put their guess in place of the '_'
					answer[j] = guess;
					console.log(answer);
					console.log("CORRECT GUESS");
					// -1 from the letters they have to get right
					remainingLetters --;
					console.log("letters left to guess: " + 
						remainingLetters);
					//display new result EX: "_ _ a _ _"
					WordDiv.innerHTML = answer.join('  ');

					correctGuess = true; // changes for condition later on

					//add to the string of correct guesses.
					guessedRight = guessedRight+guess;

					//IF THERE IS NO MORE TO GUESS TELL THEM THEY WON 
					if(remainingLetters == 0){
						alert("YOU WIN!");
					}
				}
			}
			/*Here is where we used correctGuess from line 70
			If they didnt guess right, the condition above will stay false*/
			if (correctGuess == false){
					//the User Guess will be added to the wrong guesses
					//and displayed on the screen
					guessedWrong = guessedWrong + guess;
					GuessedDiv.innerHTML = guessedWrong;

					//The guesses they have left will go down by one
					//and displayed on the screen
					guessesRemaining--;
					GuessesDiv.innerHTML = guessesRemaining;

			}
		}
		//finally if they are out of guesses
		if(guessesRemaining < 1){
			alert("Sorry! You ran out of chances! You lose!");
		}
	}
}
