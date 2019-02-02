$(document).ready(function() {
	$(".contactNav").click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#contactRow").offset().top
		}, 'slow');
	});

	$("html").onmousemove = function (e) {
		document.getElementByClassName("carousel-control-next carousel-control-prev").style.backgroundColor = "rgb(0, 0, 0)";
	}
});