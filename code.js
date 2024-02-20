"use strict";

function getComputerChoice() {
    const elements = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * elements.length);
    const randomElementChosen = elements[randomIndex];
    return randomElementChosen;
}


function recordPlayerSelection(button_val) {
    const playerChoice = document.getElementById(button_val).value;
    return playerChoice;
}

function getPlayerSelection() {
    let choice_buttons = document.querySelectorAll(".choice-button");
    let button;
    let playerChoice;
    let result;
    choice_buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            playerChoice = recordPlayerSelection(button.value);
            result = playRound(playerChoice);
            return result;
        });
    });
}


// All result from player perspective
function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    if(computerChoice === playerChoice){
        return "D";
    }
    else if(computerChoice === "rock" && playerChoice === "scissor"){
        return "L";
    }
    else if(computerChoice === "rock" && playerChoice === "paper"){
        return "W";
    }
    else if(computerChoice === "paper" && playerChoice === "scissor"){
        return "W";
    }
    else if(computerChoice === "paper" && playerChoice === "rock"){
        return "L";
    }
    else if(computerChoice === "scissor" && playerChoice === "paper"){
        return "L";
    }
    else if(computerChoice === "scissor" && playerChoice === "rock"){
        return "W";
    }
}
