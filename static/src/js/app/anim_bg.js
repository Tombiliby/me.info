// centring element 
$(".bgAnimZone, .bgMobile").find(".shape").css({
	"top": -($(".bgAnimZone").find(".shape1").height()/2) + ($(window).height()/2)
});


var animBG = function() {
	// calculate the percentage the user has scrolled down the page
	var rotateMax = 180 * $(window).scrollTop() / ($(document).height() - $(window).height()),
			rotateMin = 70,
			rotate = rotateMin - rotateMax,
			transXMax = 1000 * $(window).scrollTop() / ($(document).height() - $(window).height()),
			transXMin = 0,
			transX = transXMin + transXMax;

	$(".bgAnimZone").find(".shape1").css({
		"transform": "rotate(" + rotate + "deg) translateX(" + transX + "px)"
	});
}
animBG();

var animBG2 = function() {
	// calculate the percentage the user has scrolled down the page
	var rotateMax = 190 * $(window).scrollTop() / ($(document).height() - $(window).height()),
			rotateMin = 40,
			rotate = rotateMin - rotateMax,
			transXMax = 2000 * $(window).scrollTop() / ($(document).height() - $(window).height()),
			transXMin = 0,
			transX = transXMin + transXMax;

	$(".bgAnimZone").find(".shape2").css({
		"transform": "rotate(" + rotate + "deg) translateX(" + transX + "px)"
	});
}
animBG2();

$(window, "body", "html").scroll(function(){
	animBG();
	animBG2();
});