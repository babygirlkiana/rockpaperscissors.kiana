// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



$("#shoot").click(function(){
    var randomNumber = Math.floor((Math.random() * 3));
    var choices = ["rock","paper","scissors"];
    var computerChoice= choices[randomNumber];
    var userChoice = $("#input").val();
    
   $("#userChoice").text(userChoice);
   $("#computerChoice").text(computerChoice)
   
  if((userChoice === "rock" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "paper")){
     $("#user").text("Draw!")
     $("#comp").text("Draw!")
    }
    else if ((userChoice === "rock" && computerChoice === "paper") || (userChoice === "scissors" && computerChoice === "rock") || (userChoice === "paper" && computerChoice === "scissors")){
     $("#user").text("You Lost!")
     $("#comp").text("Computer Wins!")
    }
    else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "rock")){
     $("#user").text("You Win!")
     $("#comp").text("Computer Loses!")
    }
});


// DOCUMENT READY FUNCTION BELOW

