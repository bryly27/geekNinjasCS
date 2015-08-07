$(document).ready(function(){

	$(".content").hide();
	$(".content").fadeIn(3000);

	$("#countdown").countdown("2015/08/28", function(results){
		$("#days").text(results.strftime("%D"));
		$("#hours").text(results.strftime("%H"));
		$("#minutes").text(results.strftime("%M"));
		$("#seconds").text(results.strftime("%S"));

	})

});
