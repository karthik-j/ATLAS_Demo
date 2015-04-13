angular.module('starter.controllers', [])

.controller('AtlasCtrl', function($scope) {
	$scope.$on("$ionicView.beforeEnter", function() {
		var canvasObj = document.getElementById("atlasCanvas");
		var contextObj = canvasObj.getContext("2d");
		canvasObj.width = window.innerWidth;
		canvasObj.height = window.innerHeight
		var centerX = canvasObj.width/4 + 80;
		var centerY = canvasObj.height/2 - 60;
		
		drawCircle(contextObj, centerX, centerY);
		drawText(contextObj, 'F1', centerX, centerY);
		
		var tap = 1;
		
		canvasObj.addEventListener('click', function(event) {
			contextObj.clearRect(0,0,canvasObj.width,canvasObj.height);

			var x = event.pageX - canvasObj.offsetLeft ;
        	var y = event.pageY - canvasObj.offsetTop - 80;
        	
        	drawCircle(contextObj, centerX, centerY);
        	drawText(contextObj, 'F1', centerX, centerY);
        	
        	drawCircle(contextObj, x, y);
			drawText(contextObj, 'T'+tap++, x, y);
			
			drawLine(contextObj, centerX, centerY, x, y);
		}, false);
		
	});
});

function drawCircle (context, centerX, centerY){
	context.beginPath();
	context.arc(centerX, centerY, 25, 0, 2 * Math.PI, false);
	context.fillStyle = '#DCDCDC';
	context.fill();
	context.lineWidth = 2;
	context.strokeStyle = '#7D7D7D';
	context.stroke();
}

function drawText(context, text, x, y){
	context.font = 'bold 25px Arial';
	context.fillStyle = '#5C5CFF';
	context.textAlign = 'center';
	context.textBaseline="middle"; 
	context.fillText(text, x, y);
}

function drawLine(context, startX, startY, endX, endY ){
	context.beginPath();
	context.moveTo(startX, startY);
	context.bezierCurveTo(startX, endY, endX, startY, endX, endY);
	context.strokeStyle = '#7D7D7D';
	context.stroke();
}
