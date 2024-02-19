"use strict";

function getComputerChoice(){
    const elements = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random()*elements.length);
    const randomElementChosen = elements[randomIndex];
    return randomElementChosen;
}


function recordPlayerSelection(button_val){
    const playerChoice = document.getElementById(button_val).value;
    return playerChoice;
}

function getPlayerSelection(){
    let choice_buttons = document.querySelectorAll(".choice-button");
    let button;
    choice_buttons.forEach(function(button){
        button.addEventListener('click',function(){
            recordPlayerSelection(button.value);
        });
    });
}

function playGame(){
    let i = 0;
    while(i<5){
        getPlayerSelection()
    }
}

playGame();