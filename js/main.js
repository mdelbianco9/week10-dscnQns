
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






/* in for Loops and TypeOf  Create Reciept*/

function welcome(){

	var object = {
		firstName: "Marcus",
		lastName: "Del Bianco",
		fullName: function() {
			return "Welcome " + this.firstName + " " + this.lastName;
		}
	}

	for(prop in object) {
		if(typeof(object[prop]) == 'function'){ 
			console.log(object[prop]())
		}else{
			console.log(object[prop])
		}
	}

}


/* Constructor functions */

var student = {
		firstName: "Marcus",
		lastName: "Del Bianco",
		fullName: function() {
			return  this.firstName + " " + this.lastName + " is a student.";
		}
	}


// Create a new object

var array = [];

function Student(first, last){
	this.firstName = first;
	this.lastName = last;
	this.fullName = (function(a,b) {
			return  a + b ;
		})(this.firstName, this.lastName)

	pushToArray(array, this);
};


function pushToArray(array, item){
	array.push(item);
}


var newStudent = new Student('John', 'Jones');

console.log(newStudent);




var student = {
	first: 'Marcus',
	last: 'Del Bianco',
	fullName: function(){
		return this.first + " " + this.last;
	}
}

var array = [];

// This function creates an object
function Students(first, last){
	this.first = first,
	this.last = last,
	this.fullName = function(){
		return this.first + " " + this.last;
	}

	pushToArray(array, this);
};

function pushToArray(arr, object){
	arr.push(object);
}


var obj1 = new Students('Bobby', "Bobs");
var obj2 = new Students('Ralfiano', 'Bulgario');
var obj3 = new Students('Kobe', 'Bryant');

console.log(array);

for(i=0; i<array.length; i++){
	console.log(array[i].fullName());
}






















