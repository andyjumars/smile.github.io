window.onload = drawSmileyFace;
	
    

	

 function drawSmileyFace(){
	var canvas = document.getElementById("smiley");
	var context = canvas.getContext("2d");

    //face
	context.beginPath();
	context.arc(300,       //x x,y 在中間
		        300,       //y
		        200,       //arc radius
		        0,         //起始角度
		degreesToRadians(360),//結束角度
		true); //順時針 counter-clockwise
	context.fillStyle = "#ffffcc";
	context.fill();
	context.stroke();
   //左眼 left eye
	context.beginPath();
	context.arc(200,250,25,0,degreesToRadians(360),true);
	context.stroke();
   //右眼 right eye 
	context.beginPath();
	context.arc(400,250,25,0,degreesToRadians(360),true);
	context.stroke();
   //nose 鼻子
	context.beginPath();
	context.moveTo(300,300);
	context.lineTo(300,350);
	context.stroke();
   //
	context.beginPath();
	context.arc(300,350,75,degreesToRadians(20),degreesToRadians(160),false);
	context.stroke();

	}

	function degreesToRadians(degrees) {
	radians = (degrees * Math.PI)/180;
	return radians;
}