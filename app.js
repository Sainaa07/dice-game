// toglogchin eeljig hadgalah var, 1dehig 0 , 2dohi player 1 gej temdegley.
var activePlayer = 1;

// toglogchdin sum var
var scores = [0,0];
// toglogchig eeljinde tsugluulj baiga onoog hadgalah huvisagch
var roundScore =0;
// shooni ali talaaraa buusnig hadgalah huvisagch heregtei , 1-6 gesen utgig random uusgej ugnu.
var dice = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('.dice').style.display = "none";
console.log('Шоо : '+ dice);