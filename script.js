if(confirm("Would you like to play Rock, Paper, Scissors?"))
game();

function computerPlay(){
let compChoic=Math.floor(Math.random()*3);//random int < 3
switch(compChoic){
    
    case 0: return "rock";
            break;

    case 1: return "paper";
            break;

    case 2: return "scissors";
            break;
}
}

function playRound(userSelection,compSelection){
switch(userSelection){
    
    case "rock": switch(compSelection){
        case "rock":console.log("It's a tie!");
        return [0,0];

        case "paper":console.log("You Lose! Paper beats Rock");
        return [0,1];
        
        case "scissors":console.log("You Win! Rock beats Scissors");
        return [1,0];
        }
            
    case "paper": switch(compSelection){
        case "rock":console.log("You Win! Paper beats Rock");
        return [1,0];

        case "paper":console.log("It's a tie!");
        return [0,0];
        
        case "scissors":console.log("You Lose! Scissors beats Paper");
        return [0,1];
        }

    case "scissors": switch(compSelection){
        case "rock":console.log("You Lose! Rock beats Scissors");
        return [0,1];

        case "paper":console.log("You Win! Scissors beats Paper");
        return [1,0];
        
        case "scissors":console.log("It's a tie!");
        return [0,0];
        }
}

}
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
}