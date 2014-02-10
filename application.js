$(document).ready(function(){
	$("#basecamp2").hide();
	$("#basecamp").mouseenter(function(){
		$("#intro>h1, #intro>h5").hide();
		$("#basecamp2").show();
	}).mouseleave(function() {
		$("#basecamp2").hide();
		$("#intro>h1, #intro>h5").show();
	});
});

$(document).ready(function(){
 $("#highrise2").hide();
	$("#highrise").mouseenter(function(){
		$("#intro>h1, #intro>h5").hide();
		$("#highrise2").show();
	}).mouseleave(function() {
		$("#highrise2").hide();
		$("#intro>h1, #intro>h5").show();
	});
});

$(document).ready(function(){
 $("#campfire2").hide();
	$("#campfire").mouseenter(function(){
		$("#intro>h1, #intro>h5").hide();
		$("#campfire2").show();
	}).mouseleave(function() {
		$("#campfire2").hide();
		$("#intro>h1, #intro>h5").show();
	});
});