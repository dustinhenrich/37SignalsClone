$(document).ready(function(){
	$("#basecamp2").hide();
	$("#highrise2").hide();
	$("#campfire2").hide();
	$("#basecamp>#arrow_left").hide();
	$("#highrise>#arrow_left").hide();
	$("#campfire>#arrow_right").hide();

	$("#basecamp").mouseenter(function(){
		$("#intro>h1, #intro>h5").hide();
		$("#basecamp2").show();
		$("#basecamp>#arrow_left").show();
	}).mouseleave(function() {
		$("#basecamp2").hide();
		$("#intro>h1, #intro>h5").show();
		$("#basecamp>#arrow_left").hide();
	});
 
	$("#highrise").mouseenter(function(){
		$("#intro>h1, #intro>h5").hide();
		$("#highrise2").show();
		$("#highrise>#arrow_left").show();
	}).mouseleave(function() {
		$("#highrise2").hide();
		$("#intro>h1, #intro>h5").show();
		$("#highrise>#arrow_left").hide();
	});

	$("#campfire").mouseenter(function(){
		$("#intro>h1, #intro>h5").hide();
		$("#campfire2").show();
		$("#campfire>#arrow_right").show();
	}).mouseleave(function() {
		$("#campfire2").hide();
		$("#intro>h1, #intro>h5").show();
		$("#campfire>#arrow_right").hide();
	});
});