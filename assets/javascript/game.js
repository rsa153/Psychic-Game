var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
var wins = 0;
var losses = 0;
var guesses = 9;
var guessSoFar =[];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];                
    guessSoFar.push(userGuess);

    if (guesses > 0) {
        if (userGuess === computerChoice) {
            wins++;
            guesses = 9;
            guessSoFar = [];
        }
        
        if (userGuess !== computerChoice) {
            guesses--;
        }
    }

    if (guesses === 0) {
        losses++;
        guesses = 9;
        guessSoFar = [];
        
    }
    
    document.querySelector("#wins-text").innerHTML = "Wins: " + wins;
    document.querySelector("#losses-text").innerHTML = "Losses: " + losses;
    document.querySelector("#guesses-text").innerHTML = "Guesses Left: " + guesses;
    document.querySelector("#guesses-sofar-text").innerHTML = "Your Guesses So Far: " + guessSoFar;                        

} 
