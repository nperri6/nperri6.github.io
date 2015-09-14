 // U3.W7: Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description: To catch all the insects for your insect collection. 
// You will be a professional insect catcher with aspirations to catch at least 
//one of all the orders of insects in the world. 

//You want to be the very best, like no one ever was.
//To catch them is your real test, to pin them is your cause.  
//You will travel across the land, searching far and wide.
// Each insect order, to understand the  bio thats inside. 

// Overall mission: To catch one of each order of insect
// Goals: Collect insects in your pin collection
// Characters: You (whatever your name is)
// Objects: Catch all the insects
// Functions: Move, catch, collect, pin, view collection, 

// Pseudocode
//Create an object for each type of insect ( start with just 2 for simplicity)
//Create an object to represent your character
//Create a function to represent movement
//Create an object for your bug collection
//
//

// Initial Code

// var insectCollection = [];
// var bugJar = [];
// var name = "Nick";
// var player = {
// 	name: name, 
// 	posX: 0,
// 	posY: 0,
// 	insectCollection: insectCollection,
// 	bugJar: bugJar,


// }
// // Orders of Insects

// var odonata = {
// 	name: "odonata",
// 	bio: "A dragonfly or damselfly.  An insectavore that is often considered the king of the insect world.",
// 	posX: Math.floor((Math.random() * 10)),
// 	posY: Math.floor((Math.random()* 10))
// }

// var hymenoptera = {
// 	name: "hymenoptera",
// 	bio: "Bees, wasps, ants and sawflies. Many species live in hive societies. They are BUGGAS",
// 	posX: Math.floor((Math.random() * 10)),
// 	posY: Math.floor((Math.random()* 10))
// }

// var coleoptera = {
// 	name: "coleoptera",
// 	bio: "Beetles! This is a huge order of insects!!",
// 	posX: 0,
// 	posY: 0
// 	// posX: Math.floor((Math.random() * 10)),
// 	// posY: Math.floor((Math.random()* 10))
// }

// var insects = [odonata, hymenoptera, coleoptera];

// //Moving functions
// function walk(direction, distance) {
// 	if (direction === "north") {
// 		player.posY += distance;
// 	} else if (direction === "south") {
// 		player.posY -= distance;
// 	} else if (direction === "west") {
// 		player.posX -= distance;
// 	} else if (direction === "east") {
// 		player.posX += distance;
// 	} else {
// 		console.log("Sorry that's not a direction, try again.")
// 	}
// }
// function printPosition(object) {
// 	console.log(object.name + " is located at " + object.posX + " in the X direction and " + object.posY + " in the Y direction.");
// }

// function checkMap() {
// 	console.log("Currently there are " + insects.length + " insects left to collect!");
// 	i = 0;
// 	while (i < insects.length) {
// 		console.log(insects[i].name + " is located at " + insects[i].posX + " in the X direction and " + insects[i].posY + " in the Y direction.");
// 		i++;
// 	}
// }

// function useBugNet() {
// 	i = 0;
// 	while (i <insects.length) {
// 		console.log("Searching for  " + insects[i].name);
// 		if (player.posX === insects[i].posX && player.posY === insects[i].posY) {
// 			console.log("You caught a " + insects[i].name + "!");
// 			player.bugJar.push(insects[i]);
// 		}
// 		i++;
// 	}
// }


// //var board = [[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "]];

// // var createBoard = function() {
// // 	i = 0
// // 	while (i < insects.length) {

// // 	}
// // }
// console.log(player.bugJar);
// console.log(player.posX);
// console.log(player.insectCollection);
// useBugNet();
// console.log(player.bugJar);
// walk("north", 5);
// printPosition(player);
// walk("south", 2);
// console.log(player.posX);
// console.log(player.posY);
// walk("east", 4);
// console.log(player.posX);
// console.log(player.posY);
// checkMap();


// Refactored Code
var insectCollection = [];

var player = {
	name: name, 
	posX: 0,
	posY: 0,
	insectCollection: insectCollection,
}

var coleoptera = {
	name: "coleoptera",
	bio: "Beetles! This is a huge order of insects!!"	
}

var odonata = {
	name: "odonata",
	bio: "A dragonfly or damselfly.  An insectavore that is often considered the king of the insect world."
}

var hymenoptera = {
	name: "hymenoptera",
	bio: "Bees, wasps, ants and sawflies. Many species live in hive societies. They are BUGGAS"
}

var insects = [odonata, hymenoptera, coleoptera];
///////////////////////////////////////////////
///////// Functions inside the game itself/////
///////////////////////////////////////////////
function startGame() {
	getName();
	assignName();
	randomizeInsects();
}

function getName() {
	 player.name = prompt("What is your name?");
	 alert("Alright " + player.name + ", click OK to get started!");
	 console.log(player);
	 console.log("in the get name");
}

function assignName() {
	document.getElementById('char').innerHTML = player.name;
}

// Functions to move your character

function moveRight() {
	var character = document.getElementById("character");
	player.posX += 10;
	console.log(player.posX);
	var styleLeft = player.posX + "px";
	character.style.left = styleLeft;

}

function moveLeft() {
	var character = document.getElementById("character");
	player.posX -= 10;
	console.log(player.posX);
	var styleLeft = player.posX + "px";
	character.style.left = styleLeft;
}

function moveUp() {
	var character = document.getElementById("character");
	player.posY -= 10;
	console.log(player.posY);
	var styleDown = player.posY + "px";
	character.style.top = styleDown;
}

function moveDown() {
	var character = document.getElementById("character");
	player.posY += 10;
	console.log(player.posY);
	var styleDown = player.posY + "px";
	character.style.top = styleDown;
}

//Switches the directions to "Your Cause"
function directions() {
	document.getElementById("intro").innerHTML = "You want to be the very best, like no one ever was. To catch them is your real test, to pin them is your cause. You will travel across the land, searching far and wide. Each insect order, to understand, the  bio thats inside.";
}


// Randomize the insects' positions when the game starts 
function randomizeInsects() {
	console.log(insects);
	for (var i = 0; i < insects.length; i++) {
		var posX = Math.floor(Math.random() *50)* 10;
		var posY = Math.floor(Math.random() *50)* 10;
		insects[i].posX = posX;
		insects[i].posY = posY;
		console.log(insects[i].name + " has the value of " +insects[i].posX + "stored in the posX");
		console.log(insects[i].name + " has the value of " +insects[i].posY + "stored in the posY");
		var insect = document.getElementById(insects[i].name);
		insect.posX = posX;
		console.log(insects[i].name + "is located in the X at " +insect.posX);
		//var styleLeft = player.posX + "px";
		insect.style.left = posX + "px";
		insect.posY = posY;
		console.log(insects[i].name + "is located in the Y at " +insect.posY);
		insect.style.top = posY + "px";
	}
}
// Button to add an insect to your bug collection
function ketchum() {
	for (i = 0; i < insects.length; i++) {
		console.log("chars pos X is " + player.posX + insects[i].name + "pos X is " +insects[i].posX);
		if (player.posX === insects[i].posX && player.posY === insects[i].posY) {
			insectCollection.push(insects[i]);
			alert("Congrats, you caught a " + insects[i].name + "!");
			return 
		}
		
	}
	alert("Sorry, you didn't catch any! Make sure you are standing on an insect!");
}

// Button to update the your insect collection
function updateCollection() {
	var insectsCaught = []
	for (i=0; i < insectCollection.length; i++) {
		insectsCaught.push(insectCollection[i].name + ": ");
		insectsCaught.push(insectCollection[i].bio);
	}
	// var displayInsects = function(){
	// 	for (i=0; i < insectsCaught.length; i++) {
	// 		insectsCaught[i] + ":" + "Bio";
	// 	}
	// }
	document.getElementById("collection").innerHTML = insectsCaught.join("<br />");
									
	if (insectCollection.length === insects.length) {
		alert("CONGRATS! You are world class Insect Catcher!");
		alert("You are the very best, like no one ever was");
		alert("To catch them was your real test, to pin them was your cause");
		alert("You have traveled across the land, searching far and wide");
		alert("Each insect order, to understand, the bio thats inside!");
		alert("CONGRATULATIONS You are a true master!")
	}
}


// Reflection
//Post Initial Solution
//I got my initial solution up and running with lots of room for improvement. As the game
//stands now the person walks around and can check their map to see where the insects are located
//Once they move to the position of an insect they can use their bug net to collect the insect
//The game works in theory but you have to write all the commands out before you start playing the game
//It is very likely that you won't be able to write code to actulaly find the bugs (unless you could keep feeding commands 
//even after you initialize run the program). The initial is the MVP, I will add a lot more in the final version.
//
//Refactoring goals
// When refactoring I would like to add a lot more features to the program and clean it up.  
// I want to make use of the "Bio" of each class of insect  
// I really want to research how I can get this javascript to implement on a basic html page.  
// A lot of my problems with the initial solution is that it is not dynamic with a user experience
// You ahve to type in your walk movements before you run the program, and as the position of the 
// insects is random it would be hard to find the insects.  I could create a function to look up
// the insect positions and then move in that direction, but that wouldn't have an interactive piece,
// it would just automate the search for insects.   I will have to do some research to figure out how to
// make this a dynamic html/cc/javascript page.  



//Reflections After Refactoring
//Turning this challenge into a game that has HTML, CSS, and JS was an ENORMOUS task for me.
//Prior to setting out for this challenge I had never really incorporated JS into html and css in this fashion
//I ran into a large number of road blocks trying to figure out how the 3 langauges interacted with each other.  
// But I continued to try to figure it out piece by piece.(an hour and a half alone to just figure out a way to 
// test that the JS page was actually linked properly to the html page.)
// Overall I am happy with my progress on this challenge.  While my game is basic and looks
// elementary in its styling, I was able to incorporate and learn about a large number of JS functions
// and how they interact with HTML.  I enjoyed figuring out the document.getElementById().  Without this function
// I would have no idea how I would do this challenge, and it was nice to get familiar with it.  
// In addition I had good practice with changing html on a page, storing variables that relate to positions on a page (posX posY)
// some basic html and css styling, and javascript alerts
