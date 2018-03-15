$( document ).ready(function() {
var chars = "abcd";
var wins = 0;
var losses = 0;
var guesseSoFar = '';
var guessesLeft = 3;

var computerGuess = '';

function startGame() {
    computerGuess = chars[Math.floor(Math.random()*chars.length)];
    displaycomputerGuess();
    var guessesSoFar = [];

    displayguessesSoFar();
document.onkeyup = function (event) {
    userGuess = event.key;
    guessesSoFar.push(userGuess);
    console.log(guessesSoFar);
    
    if (computerGuess == userGuess) {
        wins++;
        displayWins();
        startGame();
    }

    else {
        guessesLeft--;  
        displayguessesLeft();    
        if (computerGuess != userGuess && guessesLeft < 1){
            losses++;
            guessesLeft = 3;
            displayLosses();
            displayguessesLeft(); 
            startGame();    
        }
    }
}
}

startGame();

function displaycomputerGuess() {
    console.log('computerGuess: ' + computerGuess);
}

function displayWins() {
    $('#wins').html('<strong>Wins:</strong> ' + wins);
}

function displayLosses() {
    $('#losses').html('<strong>Losses:</strong> ' + losses);
}

function displayguessesLeft () {
    $('#guessesLeft').html('<strong>Guesses Left:</strong> ' + guessesLeft);
}

function displayguessesSoFar () {
    $('#guessesSoFar').html('<strong>Guesses So Far:</strong> ' + guessesSoFar);
}

});