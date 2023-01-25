// toglogchin eeljig hadgalah var, 1dehig 0 , 2dohi player 1 gej temdegley.
var activePlayer = 0;

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
//shoo shideh eventlistener
document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click",function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // 1 - 6 dotor rand tooo gargaj avna
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    //toglogchin eelj solih
    if (diceNumber !== 1) {
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        switchToNextPlayer();
    }
});
// hold event
document.querySelector(".btn-hold").addEventListener('click',function(){
    // ug toglogchin tsugluulsan onoog global onoon deer nemne
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    //eeljin onoo 0leh bolgono
    if (scores[activePlayer] >= 10) {
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
        switchToNextPlayer();
    }
    //toglogchin eelj solino
});
function switchToNextPlayer() {

    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
  
  
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  
  
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  
  
    diceDom.style.display = "none";
  }
