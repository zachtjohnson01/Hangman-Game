    // VARIABLES
    // ==========================================================================

    var game = ["Pawnee","Knope","Swanson","Sebastian","Ludgate","Wiatt","Haverford"];
    var choice = (Math.floor(Math.random() * game.length));
    var answer = game[choice];
    var myLength = answer.length;
    var display = [myLength];
    var win = myLength; 
    var letters = answer.split('');
    var attemptsLeft = 6;
    var userLetter = "";


    // FUNCTIONS
    // ==========================================================================

    function startUp() {

        // Create array of underscores with same length as game.
        for (var i = 0; i < answer.length; i++) {
            display[i] = "_";
        }
        document.getElementById("game").innerHTML = display.join(" ");
    }

    document.onkeyup = function Letter(event) {


        var letter = event.key;

        if(/[a-zA-Z0-9-_ ]/.test(String.fromCharCode(event.keyCode))) {
            for (var i = 0; i < answer.length; i++) {              
                if (letter === display[i]) {
                    continue;
                }
                else if (letter === letters[i]) {
                    display[i] = letter;
                    win--;
                }
            };

            document.getElementById("game").innerHTML = display.join(" ");
            
            if(answer.includes(letter) === false) {
                attemptsLeft--;
            };

            if (win < 1) {
                document.getElementById("guesses").innerHTML = "YOU WIN!!";
            } else if (attemptsLeft < 1) {
                document.getElementById("guesses").innerHTML = "YOU LOSE!!";
            } else {
                document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " incorrect guesses left";
            };
            

        }
    }
    


