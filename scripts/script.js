
var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function(){
    for(let i = 0; i < 3; i++){
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "sprites/" + choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice(){ 
    you = this.id;
    document.getElementById("your-choice").src = this.src;
    
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = "sprites/" + opponent + ".png";
    
    if(you == "rock"){
        if(opponent == "paper"){
            opponentScore++;
        }else if(opponent == "scissors"){
            yourScore++;
        }
    }else if(you == "paper"){
        if(opponent == "rock"){
            yourScore++;
        }else if(opponent == "scissors"){
            opponentScore++;
        }
    }else if(you == "scissors"){
        if(opponent == "rock"){
            opponentScore++;
        }else if(opponent == "paper"){
            yourScore++;
        }
    }
    
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}