$(document).ready(function(){
	$('#basecamp').mouseenter(function(){
		console.log("Mass enter fire")
		$('#intro').replaceWith("<h1 class='baseCampDesc2'>Basecamp is the project management tool you</br> wish you had on your last project</h1>");
	});
	
	$('basecamp').mouseout(function(){
		console.log("Mouse has left")
		$('#baseCampDesc2').replaceWith("#intro")
	}
	
	$('#highrise').mouseenter(function(){
		console.log("Mass enter fire")
		$('#intro').replaceWith("<h1 class='highRiseDesc2'>Highrise remembers the important things</br>about people you'd normally forget </h1>");
	});
	
	$('#campfire').mouseenter(function(){
		console.log("Mass enter fire")
		$('#intro').replaceWith("<h1 class='campFireDesc2'>From near or far, Campfire helps teams work</br>together over the web in real-time.</h1>");
	});
});