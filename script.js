let score=[0,0];
const scoreDisplay=document.querySelector('#score');

const options=document.querySelector('.options').querySelectorAll(':scope > div');
options.forEach(option => option.addEventListener('click',e=> playRound(e.path[1].id)));

function playRound(userChoice){
    let compChoice = computerPlay();
    let result;
    const resultDiv=document.querySelector('#roundResult');
    resultDiv.textContent=`You played ${userChoice}. Computer played ${compChoice}`
    switch(userChoice){
        case "rock": 
            switch(compChoice){
                case "rock": result=[0,0];
                            break;
        
                case "paper": result=[0,1];
                            break;
                
                case "scissors": result=[1,0];
                            break;
            }
            break;

        case "paper": 
            switch(compChoice){
                case "rock": result=[1,0];
                            break;
        
                case "paper": result=[0,0];
                            break;
                
                case "scissors": result=[0,1];
                            break;
            }
            break;

        case "scissors": 
            switch(compChoice){
                case "rock": result=[0,1];
                            break;
        
                case "paper": result=[1,0];
                            break;
                
                case "scissors": result=[0,0];
                            break;
            }
            break;
    }
    score[0]+=result[0];
    score[1]+=result[1];
    scoreDisplay.textContent=`${score[0]}-${score[1]}`
}

function computerPlay(){
    let compChoice=Math.floor(Math.random()*3);//random int < 3
    switch(compChoice){
        
        case 0: return "rock";

        case 1: return "paper";

        case 2: return "scissors";
    }
}
/*

function game(){
let score=[0,0];
for(let i=0;i<5;i++){
    let userChoice;
    let validResponse=false;
    while(!validResponse){
        userChoice=prompt("Rock, paper or scissors?","Rock");
        if((/^ *(rock|paper|scissors) *$/i).test(userChoice))
            validResponse=true;
        else if (userChoice===null)
            return;
        else
            alert("Please type with correct spelling");
    }
    userChoice=userChoice.trim().toLowerCase();
    let compChoice=computerPlay();
    let result=playRound(userChoice,compChoice);
    score[0]+=result[0];
    score[1]+=result[1];
}
if(score[0]>score[1])
    alert("You Won!")
else
    alert("Tough Luck Pal")
}*/