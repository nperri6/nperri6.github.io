var player = {
	name: "Nick", 
	posX: 0,
	posY: 0,
	//insectCollection: insectCollection,
	//bugJar: bugJar,


}

function moveRight() {
	//var character = document.getElementById("character");
	player.posX += 10;
	console.log(player.posX);
	var styleLeft = player.posX + "px";
	console.log(styleLeft);
	//character.style.left = styleLeft;

}

function moveLeft() {
	//var character = document.getElementById("character");
	player.posX -= 10;
	console.log(player.posX);
	var styleLeft = player.posX + "px";
	console.log(styleLeft);
	//character.style.left = styleLeft;
}

moveRight();
moveLeft();
moveLeft();
moveRight();