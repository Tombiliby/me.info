// position relative to scroll
// return true if element is on top of the screen (posibility to add marge)
var posOnScroll = function(e, scrollPos, marge){
	var $elem = $(e);
	if(marge=="undefined") marge=0;
	if(($elem.offset().top-marge) <= scrollPos) {
		return true;
	}
};

// Animate graph
var graphAnim = function(active, e) {
	var $el = $(e),
			gauges = $el.find(".gauge");

	if(active == true) {
		gauges.each(function(shift){
			if($(this).width() <= 0) {
				$(this).delay(shift*100).animate({ "width": $(this).attr("data-value")+"%" }, "ease-out" );
			}
		})
	};
};


graphAnim(posOnScroll(".skillsCol.skillsSoftware", $(this).scrollTop(), ($(window).height()/1.35)), ".skillsCol.skillsSoftware");
graphAnim(posOnScroll(".skillsCol.skillsProg", $(this).scrollTop(), ($(window).height()/1.35)), ".skillsCol.skillsProg");
graphAnim(posOnScroll(".skillsCol.skillsOrg", $(this).scrollTop(), ($(window).height()/1.15)), ".skillsCol.skillsOrg");

// on scroll
$(window, "body", "html").scroll(function(){
	// call graphAnim function with posOnScroll parameter
	graphAnim(posOnScroll(".skillsCol.skillsSoftware", $(this).scrollTop(), ($(window).height()/1.35)), ".skillsCol.skillsSoftware");
	graphAnim(posOnScroll(".skillsCol.skillsProg", $(this).scrollTop(), ($(window).height()/1.35)), ".skillsCol.skillsProg");
	graphAnim(posOnScroll(".skillsCol.skillsOrg", $(this).scrollTop(), ($(window).height()/1.15)), ".skillsCol.skillsOrg");
});