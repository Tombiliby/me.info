var now = new Date();
var hours = now.getHours();
if (hours > 18) {
	$("#msg_hello").text("BONSOIR");
}