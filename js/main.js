$(document).ready(function () {
	$('nav a[href*="#"]').on('click', function() {
		$('html,body').animate({ screenTop: $($(this).attr('href')).offset().top - 100}, 2000);
	});	
});


