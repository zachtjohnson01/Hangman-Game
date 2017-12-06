    // VARIABLES
    // ==========================================================================

    var game = ["PAWNEE",
                "LESLIE KNOPE",
                "RON SWANSON",
                "LIL SEBASTIAN",
                "APRIL LUDGATE",
                "BEN WYATT",
                "TOM HAVERFORD",
                "MOUSERAT",
                "JERRY GERGICH",
                "ANDY DWYER",
                "CHAMPION",
                "CHRIS TRAEGER",
                "EAGLETON",
                "ANN PERKINS",
                "DONNA MEAGLE"];
    var choice = (Math.floor(Math.random() * game.length));
    var answer = game[choice];
    var myLength = answer.length;
    var display = [myLength];
    var win = myLength; 
    var letters = answer.split('');
    var attemptsLeft = 6;
    var userLetter = "";
    var spaces = 0;


    // FUNCTIONS
    // ==========================================================================

    function startUp() {

        // Create array of underscores with same length as game. When there is a space
        // in the name, create visible space on web page using a non-spreaking space (nbsp)
        for (var i = 0; i < answer.length; i++) {
            if (letters[i] === " ") {
                display[i] = "&nbsp";
            } else display[i] = "_";
        }
        document.getElementById("game").innerHTML = display.join(" ");
    }


    document.onkeyup = function Letter(event) {

        var letter = (event.key).toUpperCase();
        
        if(/[a-zA-Z0-9-_ ]/.test(String.fromCharCode(event.keyCode))) {
            for (var i = 0; i < answer.length; i++) {              
                if (letter === display[i]) {
                    continue;
                }
                else if (letters[i] === " ") {
                    display[i] = "&nbsp";
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

            if(answer.includes(" ") && spaces <1) {
                win--;
                spaces++;
            }

            if (win < 1) {
                document.getElementById("guesses").innerHTML = "YOU WIN!!";
            } else if (attemptsLeft < 1) {
                document.getElementById("guesses").innerHTML = "YOU LOSE!!";
                
                for (var i=0; i < answer.length-1; i++) {
                    if(letters[i] === " ") {
                        letters[i] = "&nbsp";
                    }else {letters[i];
                    }
                };
                document.getElementById("game").innerHTML = letters.join(" ")
            } else {
                document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " incorrect guesses left";
            };
        }
    }

    function GameReset() {
        var game = ["PAWNEE",
        "LESLIE KNOPE",
        "RON SWANSON",
        "LIL SEBASTIAN",
        "APRIL LUDGATE",
        "BEN WIATT",
        "TOM HAVERFORD",
        "MOUSERAT",
        "JERRY GERGICH",
        "ANDY DWYER",
        "CHAMPION",
        "CHRIS TRAEGER",
        "EAGLETON"];
        var choice = (Math.floor(Math.random() * game.length));
        var answer = game[choice];
        var myLength = answer.length;
        var display = [myLength];
        var win = myLength; 
        var letters = answer.split('');
        var attemptsLeft = 6;
        var userLetter = "";
        var spaces = 0;
    }
    


