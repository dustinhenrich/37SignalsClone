$(document).ready(function(){

	var basecamp2 = "<h1 class='baseCamp2'>Basecamp is the project management tool you</br> wish you had on your last project</h1>";

	$('#basecamp').mouseenter(function(){
		$('#intro').hide();
		$('#baseCamp2').show();
	});

	$('#basecamp').mouseleave(function(){
		$('#intro').show()
	})

	$('#highrise').mouseenter(function(){
		$('#intro').hide();
	});

	$('#highrise').mouseleave(function(){
		$('#intro').show();
	});

	$('#campfire').mouseenter(function(){
		$('#intro').hide();
	});

	$('#campfire').mouseleave(function(){
		$('#intro').show();
	});
});