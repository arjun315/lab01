var yourchoice = prompt("Choose your Selection rock, paper or scissors?");

        if (! yourchoice) {
            
            document.write("<p>Try again</p>");
        } else {
            
            document.write("<p>Your Choice:" + " " + yourchoice + "</p>");
        }

      var systemPrefer = Math.random();
        if (systemPrefer < 0.26) {
            systemPrefer = "rock";
        } else if(systemPrefer <= 0.51) {
            systemPrefer = "paper";
        } else {
            systemPrefer = "scissors";
        }

        
        document.write("<p>Computers Choice:" + " " + systemPrefer + "</p>");

        
        var compare = function(firstChoice,secondChoice) {
            if (firstChoice === secondChoice) {
                return "It's a tie!";
            }
            if (firstChoice === "rock") {
                if (secondChoice === "scissors") {

                                        return "You win!";
                } else {
                    
                    return "You lose! Try again.";
                }
            }
            if (firstChoice === "paper") {
                if (secondChoice === "rock") {
                    
                    return "You win!";
                } else {
                   
                    return "You lose! Try again.";
                }
            }
            if (firstChoice === "scissors") {
                if (secondChoice === "rock") {
                   
                    return "You lose! Try again.";
                } else {
                    
                    return "You win!";
                }
            }
        };
     
     

       
        var results = compare(yourchoice,systemPrefer);
        document.write("<br><hr><br>" + results);