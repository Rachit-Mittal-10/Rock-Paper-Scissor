"use strict";

function getComputerChoice(){
    const elements = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random()*elements.length);
    const randomElementChosen = elements[randomIndex];
    return randomElementChosen;
}

function playRound(
    playerSelection, 
    computerSelection = getComputerChoice()
){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "scissor" || playerSelection === "scissors"){
        playerSelection = "scissor";
    }
    if(playerSelection === computerSelection){
        return {point: 0, result: "D", message:"Round Draw!!!"};
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return {point: -1, result: "L", message:"You Lose!!! Paper beats Rock"};
    }
    else if(playerSelection === "rock" && computerSelection === "scissor"){
        return {point: 1, result: "W", message:"You Won!!! Rock beats Scissors"};
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return {point: 1, result: "W", message:"You Won!!! Paper beats Rock"};
    }
    else if(playerSelection === "paper" && computerSelection === "scissor"){
        return {point: -1, result: "L", message:"You Lose!!! Scissors beats Paper"};
    }
    else if(playerSelection === "scissor" && computerSelection === "rock"){
        return {point: -1, result: "L", message:"You Lose!!! Rock beats Scissors"};
    }
    else if(playerSelection === "scissor" && computerSelection === "paper"){
        return {point: 1, result: "W", message:"You Won!!! Scissors beats Paper"};
    }
    else{
        return {point: NaN, result: "NaN", message:"Enter Valid Input"};
    }
}

function playGame(){
    let playerPoints = 0;
    let drawCount = 0;
    let computerPoint = 0;
    let resultMatch = "";
    for(let round = 0;round<5;round++){
        let playerChoice = prompt("Enter Your Choice out of Rock, Paper, Scissor::"," ");
        if(+playerChoice == 0){
            round--;
            continue;
        }
        const {point,result,message} = playRound(playerChoice);
        if(isNaN(point)){
            round--;
            continue;
        }
        if(point === 0){
            drawCount++;
        }
        computerPoint += -point;
        playerPoints += point;
        resultMatch += result;
        alert(`Round Result: ${message}`);
    }
    alert(`Match Results\n${resultMatch}\nPlayer Points: ${playerPoints}\nComputer Points: ${computerPoint}\nDraw Count: ${drawCount}`);
}

playGame();