var rotationStep = 2;
var updateInterval = 20;
var currentAngle = 0;

var line = document.getElementById("line");

function rotateLine(){

	currentAngle = currentAngle + rotationStep;
	line.style.transform = "rotate("+currentAngle+"deg)";
	
}
setInterval(rotateLine,20);