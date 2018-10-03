
/* Functions in Objects - Player1 player2 Example*/

var p1SHOTS = document.getElementById('player1Shots'); /*Input element*/
var p1BASKETS = document.getElementById('player1Baskets'); /*Input element*/

var p2SHOTS = document.getElementById('player2Shots');
var p2BASKETS = document.getElementById('player2Baskets');



function calc(){


	var player1 = 
	{
		name: "Player 1",
		shots: p1SHOTS.value,			/* Entered from Input*/
		baskets: p1BASKETS.value,		/* Entered from Input*/
		score: function() {
			return (this.baskets/this.shots) * 100
		}
	}

	var player2 = 
	{
		name: "Player 2",
		shots: p2SHOTS.value,			/* Entered from Input*/
		baskets: p2BASKETS.value,		/* Entered from Input*/
		score: function() {
			return (this.baskets/this.shots) * 100
		}
	}


document.getElementById('score1').innerText = player1.score();
document.getElementById('score2').innerText = player2.score();

if(player1.score() > player2.score()) {
	document.getElementById('winner').innerText = player1.name + " Wins!";
}else{
	document.getElementById('winner').innerText = player2.name + " Wins!";
}


};
