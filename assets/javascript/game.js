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
    

document.onkeyup = function (event) {
    userGuess = event.key;
    guessesSoFar.push(userGuess);
    
    console.log(guessesSoFar);
    console.log('Guesses so Far: ' + guessesSoFar.toString());
    $('#guessesSoFar').html('<strong>Guesses So Far:</strong> ' + guessesSoFar.toString());
    
    if (computerGuess == userGuess) {
        wins++;
        displayWins();
        startGame();
        $('#guessesSoFar').html('<strong>Guesses So Far:</strong> ');
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
            $('#guessesSoFar').html('<strong>Guesses So Far:</strong> ');
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



});