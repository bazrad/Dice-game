var activePlayer = 1;

var scores = [0, 0];

var roundScore = 0;



// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

document.getElementById("score-0").textContent = 0;// mash hurdan ajildah function
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDOM = document.querySelector(".dice");
diceDOM.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function(){
    var dice = Math.floor(Math.random() * 6) + 1;
    diceDOM.style.display = "block";
    diceDOM.src = 'dice-' + dice + '.png';
    
});


function diceShid(){
    alert("Shoo buulee " + dice );
}