canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d")
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = onloading; // setting a function, onloading this variable
	img_imgTag.src = uploding;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		aplhabetkey();
		document.getElementById(d1).innerHTML="you pressed alphabet key"
	  {
		otherkey();
		document.getElementById(d1).innerHTML="You pressed symbol or other key";
	 console.log("otherkey");
	}

if (keyPressed >=48 && keyPressed <=57){
	numberkey();
	document.getElementById(d1).innerHTML="You pressed number key";
console.log("numberkey");
}
if (keyPressed >=37 && keyPressed <=40){
	arrowkey();
	document.getElementById(d1).innerHTML="You pressed number key";
console.log("arrowkey");
}

function aplhabetkey()
{
	img_image = "alphakey.png";
add()
}
function numberkey()
{
img_image = "numberkey.png";
add()
}
function arrowkey()
{
	img_image = "arrowkey.png";
	add()
}
function specialkey()
{
	img_image = "specialkey.png";
	add()
}
function otherkey()

	img_image="otherkey.png";
	add();

