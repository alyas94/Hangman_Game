// this JS file connects to index.html & runs the hangman game

//initalize variables:
var words = ["example", "another", "words", "different"
,"something", "new", "current", "random"];
var guessedLetter; //letter user has guessed
var guessesRemaining = 13; //starts at 13 and will decrease
var answer = ""; //the correct answer, will be _ _ _ initially
var alreadyGuessed; //Letters The User Has Already Guessed

//this will find random word from words array 
var randomWord = words[Math.floor(Math.random()*words.length)]
console.log(randomWord);

//take random word and put _ _ _ in its place
var wordLength = randomWord.length;
console.log(wordLength);
for (var i = 0; i < randomWord.length; i++) {
	answer = answer + "_"
}
console.log(answer)
//display "_ _ _ _ _"
var WordDiv = document.getElementById("emptyCurrentWord");
	WordDiv.innerHTML = answer;

//gets users guess from keyboard
document.onkeyup = function(event) {
	guessedLetter = event.key;
	console.log(guessedLetter);
	//now that we have users guess, we'll search through and see if
	//its correct
}

//for loop used to search through the word for a correct guess
for (var i = 0; i<randomWord.length; i++) {
	if (randomWord[i] === guessedLetter){
		answer[i] = guessedLetter;
	}
	i++;
}





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