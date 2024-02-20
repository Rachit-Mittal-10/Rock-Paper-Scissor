"use strict";

let playerPoint = 0;
let computerPoint = 0;

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

function handleResult(result){
    const result_space = document.getElementsByClassName('result')[0];
    const para_result = document.createElement('p');
    para_result.textContent = result;
    result_space.appendChild(para_result);
    let playerPointDisplay = document.getElementById("player-points");
    playerPointDisplay.textContent = playerPoint;
    let computerPointDisplay = document.getElementById("computer-points");
    computerPointDisplay.textContent = computerPoint;
}

function getPlayerSelection() {
    let choice_buttons = document.querySelectorAll(".choice-button");
    let playerChoice;
    let result;
    choice_buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if(playerPoint==5 || computerPoint==5){
                return;
            }
            playerChoice = recordPlayerSelection(button.value);
            result = playRound(playerChoice);
            handleResult(result);
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
        computerPoint++;
        return "L";
    }
    else if(computerChoice === "rock" && playerChoice === "paper"){
        playerPoint++;
        return "W";
    }
    else if(computerChoice === "paper" && playerChoice === "scissor"){
        playerPoint++;
        return "W";
    }
    else if(computerChoice === "paper" && playerChoice === "rock"){
        computerPoint++;
        return "L";
    }
    else if(computerChoice === "scissor" && playerChoice === "paper"){
        computerPoint++;
        return "L";
    }
    else if(computerChoice === "scissor" && playerChoice === "rock"){
        playerPoint++;
        return "W";
    }
}

getPlayerSelection();