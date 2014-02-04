$(document).ready(function(){
	$('#basecamp').mouseenter(function(){
		$('#intro').hide();
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