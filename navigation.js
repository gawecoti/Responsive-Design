$(document).ready(function(){
	$("#mobile-icon button").on('click', function() {
		$("#mobile-menu").slideToggle("medium");
	});

	// If window size is below 850px and nav bar is down, move it up 
	$(window).resize(function() {
		var width = $(window).width();
		var mobileMenu = $('#mobile-menu').css('display');

		if (width > 850 && (mobileMenu != 'none')) {
			$("#mobile-menu").slideUp("fast");
		}
	});
});