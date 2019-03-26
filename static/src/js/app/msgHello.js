var now = new Date();
var hours = now.getHours();
if (hours > 17) {
	$("#msg_hello").text("BONSOIR");
}
if (hours > 20) {
	$('head').append('<link rel="stylesheet" href="./static/dist/css/style_dark.css" type="text/css" />');
}
