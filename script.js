let score=[0,0];
const scoreDisplay=document.querySelector('#score');

const options=document.querySelector('.options').querySelectorAll(':scope > div');
options.forEach(option => option.addEventListener('click',e=> playRound(e.path[1].id)));

scoreDisplay.addEventListener("Game Over",e=>showEndScreen(e.detail.text));

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
    scoreDisplay.textContent=`${score[0]}-${score[1]}`;
    
    if(result[1])
        document.querySelector(`#lives :nth-child(${score[1]})`).classList.add('dead');
    
    if(score[0]==5){
        const gameOver = new CustomEvent("Game Over", {
            detail:{
                text:"You Won!"
            }
        });
        scoreDisplay.dispatchEvent(gameOver);
    }
    else if(score[1]==5){
        const gameOver = new CustomEvent("Game Over", {
            detail:{
                text:"You Lost!"
            }
        });
        scoreDisplay.dispatchEvent(gameOver);
    }

}

function computerPlay(){
    let compChoice=Math.floor(Math.random()*3);//random int < 3
    switch(compChoice){
        
        case 0: return "rock";

        case 1: return "paper";

        case 2: return "scissors";
    }
}

function showEndScreen(text){
    const endScreen=document.querySelector('#endScreen');
    const result = endScreen.firstElementChild;
    result.textContent=text;
    endScreen.style.display='flex';
    endScreen.querySelector('button').addEventListener('click',()=>{
        score=[0,0];
        scoreDisplay.textContent=`${score[0]}-${score[1]}`;
        document.querySelectorAll('#lives > div').forEach(life=>life.classList.remove('dead'));
        endScreen.style.display='none';
    })
}
