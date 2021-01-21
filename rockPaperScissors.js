let hands = ['rock', 'paper', 'scissors'];
let player = "";
let playerWins = 0;
let computerWins = 0;
let playerChoice = "";
let computerChoice = "";

let winner = function(arg, choice){
	if(arg === "computer"){
		computerWins += 1;
		console.log("Too bad, so sad, "+capitalizeFirstLetter(arg)+" wins with "+capitalizeFirstLetter(choice)+" over your "+capitalizeFirstLetter(playerChoice)+"!");
	} else {
		playerWins += 1;
		console.log("Good for you! Your "+capitalizeFirstLetter(choice)+" prevails over the Computer's "+capitalizeFirstLetter(computerChoice)+"!");
	}
}
let draw = function(){
	console.log("It's a draw, each with "+capitalizeFirstLetter(playerChoice)+". Try again.");
}
let capitalizeFirstLetter = function(str) {
  if(str.length > 0){
    let first = str.charAt(0).toUpperCase();
    return first + str.slice(1);
  } else {
    return str;
  }
}
player = prompt("Welcome player, please enter your name:", "John").toLowerCase();
alert("Nice to meet you "+capitalizeFirstLetter(player)+", let's see how you do with 'Rock, Paper, Scissors' against the computer! It's best out of 5.");
while(playerWins < 3 && computerWins < 3){
	playerChoice = prompt(capitalizeFirstLetter(player)+" enter your choice (Rock, Paper, or Scissors) below:").toLowerCase();
	computerChoice = hands[parseInt(Math.random()*hands.length) %3];
	switch(playerChoice){
		case "rock":
			if(computerChoice === "paper"){
				winner("computer", computerChoice);
			} else if(computerChoice === "scissors") {
				winner(player, playerChoice);
			} else {
				draw();
			}
			break;
		case "paper":
			if(computerChoice === "paper"){
				draw();
			} else if(computerChoice === "scissors"){
				winner("computer", computerChoice);
			} else {
				winner(player, playerChoice);
			}
			break;
		case "scissors":
			if(computerChoice === "paper"){
				winner(player, playerChoice);
			} else if(computerChoice === "scissors"){
				draw();
			} else {
				winner("computer", computerChoice);
			}
			break;
		default:
		  break;
	}
}
if(playerWins > 2){
	console.log("Congratulations, "+capitalizeFirstLetter(player)+"! You totally owned the Computer!! The final score is "+capitalizeFirstLetter(player)+" "+playerWins+" to Computer "+computerWins);
} else {
	console.log(capitalizeFirstLetter(player)+", what happened? You lost to random plays of the Computer. The final score is "+capitalizeFirstLetter(player)+" "+playerWins+" to Computer "+computerWins+". Here's a tissue.");
}