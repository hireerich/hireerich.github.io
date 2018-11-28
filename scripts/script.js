$(document).ready(function() {
	$(".contactNav").click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#contactRow").offset().top
		}, 'slow');
	});
});