// function initEventRoll() {
	// //$("#event_pool").append("eventpool");
	// $("#event_pool").append("<div id='eventpool_wrap'></div>");
// 
	// for (var i = 1; i < 9; i++) {
		// $("#eventpool_wrap").append("<div class='event' id=event_" + i + "><img src='./images/00" + i + ".jpg'></img></div>");
	// }
// }

function EventPool() {
	this.init = function() {
		$("#event_pool").append("<div id='eventpool_wrap'></div>");

		for (var i = 1; i < 9; i++) {
			$("#eventpool_wrap").append("<div class='event' id=event_" + i + "><img src='./images/00" + i + ".jpg'></img></div>");
		}
	}
	this.toString = function() {
		return "EventPool say hi!";
	}
}
