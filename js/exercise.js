

var person1 = {
	firstName: 'Bo',
	lastName: 'Jenkins',
	portrait: 'img/emj1.png',
	title: 'cto'
}

var person2 = {
	firstName: 'Hillary',
	lastName: 'Trump',
	portrait: 'img/emj2.png',
	title: 'cfo'
}

var person3 = {
	firstName: 'Barack',
	lastName: 'Powel',
	portrait: 'img/emj3.jpg',
	title: 'cmo'
}

var person4 = {
	firstName: 'Sister',
	lastName: 'Nancy',
	portrait: 'img/emj4.jpeg',
	title: 'co-founder'
}

var person5 = {
	firstName: 'John',
	lastName: 'Appleseed',
	portrait: 'img/emj5.jpeg',
	title: 'co-founder'
}

// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4);
// console.log(person5);

var personArray = [];


function People(first, last, portrait, title){
	this.firstName = first;
	this.lastName = last;
	this.portrait = portrait;
	this.titles = title;
	// this.concat = function(){
	// 	return this.firstName + " " + this.lastName;
	// }
	this.isFounder = function(){
	if(this.titles == 'co-founder'){
		 return true;
	}else{
		 return false;
	}
}

	pushToArray(personArray, this);
}

/* Stores the concat method globally so we dont 
need to have it in each newly created object*/
People.prototype.concat = function(){
	return this.firstName + " " + this.lastName;
}

// People.prototype.isFounder = function(){
// 	if(this.titles == 'co-founder'){
// 		 this.founder = true;
// 	}else{
// 		 this.founder = false;
// 	}
// }


var people1 = new People('Bo', 'Jenkins', 'img/emj1.png', 'cto');
var people2 = new People('Hillary', 'Trump', 'img/emj2.png', 'cfo');
var people3 = new People('Barack', 'Powel', 'img/emj3.jpg', 'cmo');
var people4 = new People('Sister', 'Nancy', 'img/emj4.jpeg', 'co-founder');
var people5 = new People('John', 'Appleseed', 'img/emj5.jpeg', 'co-founder');



function pushToArray(arr, item){
	arr.push(item);
}

console.log(people5);
console.log(people4);


for(i=0; i<personArray.length; i++){
	var myDiv = document.createElement('div');
	var myH2 = document.createElement('h2');
	var myH2_2 = document.createElement('h2');
	var myImg = document.createElement('img');
	var myH3 = document.createElement('h3');
	var myH4 = document.createElement('h4');


	// Add first name to an H2
	myH2.textContent = personArray[i].firstName;
	myDiv.appendChild(myH2);

	// Add lastname to an H2
	myH2_2.textContent = personArray[i].lastName;
	myDiv.appendChild(myH2_2);


	// Add portrait to an IMG tag
	myImg.setAttribute('src', personArray[i].portrait);
	myDiv.appendChild(myImg);

	// Add title to an H3
	myH3.textContent = personArray[i].titles;
	myDiv.appendChild(myH3);

	// Adds the fullname of the person with the method property we used in the constructor function
	myH4.textContent = personArray[i].concat();
	myDiv.appendChild(myH4);

	if(personArray[i].isFounder() == true){
		myDiv.style.border = '2px solid blue';
	}


	myDiv.style.backgroundColor = 'grey';
	document.getElementsByClassName('row')[0].appendChild(myDiv);

	
console.log(personArray[i].isFounder())
};












