// toglogchin eeljig hadgalah var, 1dehig 0 , 2dohi player 1 gej temdegley.
var activePlayer = 1;

// toglogchdin sum var
var scores = [0,0];
// toglogchig eeljinde tsugluulj baiga onoog hadgalah huvisagch
var roundScore =0;
// shooni ali talaaraa buusnig hadgalah huvisagch heregtei , 1-6 gesen utgig random uusgej ugnu.
var diceDom = document.querySelector(".dice");

//program is beginning
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0"
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

document.querySelector(".dice").style.display = "none";
document.querySelector(".btn-roll").addEventListener("click",function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
});

