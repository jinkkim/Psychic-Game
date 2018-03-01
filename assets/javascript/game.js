var winScore = 0;
var loseScore = 0;
var guessLimit = 9;
var historyChar = [];
const SCOREBOARD = document.querySelector("#scoreboard");


//random function for the character assignment

var char = "abcdefghijklmnopqrstuvwxyz";
var machineChar = char[Math.floor(Math.random() *26)];
console.log("What computer picked: ", machineChar);

updateScreen();

// user input alphabet process
document.body.addEventListener("keypress", amIRight, false);


// compare user input to machine alphabet and change scores
function amIRight(event){
    var pressedKey = event.keyCode;                     // this is what you presed: ASCII number
    var pressedChar = String.fromCharCode(pressedKey);  //that is what you converted from ASCII to character

    historyChar.push(pressedChar);                      // history update


    if( pressedKey < 97 || pressedKey > 122 ) {
        alert( "Please guess between a - z. CAPITALS and numbers are not allowed.");
    }

    if ( pressedChar == machineChar ) {
        winScore++;
        initialization();
    } else {
        guessLimit--;
        if (guessLimit == 0){
            loseScore++;
            initialization();
        }
    }

    updateScreen();
}


function updateScreen(){
    SCOREBOARD.innerHTML = "<h2>Wins: " + winScore + "</h2>"
        + "<h2>Losses: " + loseScore + "</h2>"
        + "<h2>Guesses left: " + guessLimit + "</h2>"
        + "<h2>Your guesses so far: " + historyChar + "</h2>";
}

function initialization() {
    guessLimit = 9;                         //initialization
    historyChar = [];                       //initialization
    machineChar = char[Math.floor(Math.random() *26)];   // Assign random alphabet again
    console.log("What computer picked: ", machineChar);
}