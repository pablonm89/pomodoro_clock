session = 25;
breakSession = 5;
seconds = sessionToSeconds(session);

//use seconds / 60 to get minutes
//use seconds % 60 to get remaining seconds
//save seconds variable with new value doing seconds %= 60
//use setInterval 1000 to reduce 1 second at a time

//CONVERTS INTEGER VALUE TO SECONDS
function sessionToSeconds(n) {
	var ToSeconds = n * 60
	return ToSeconds
}

function displaySession(time) {
	if (time < 10) {
		return "0" + time
	} else {
		return time
	}
	//if less than 10 minutes, put 0 in front
	//cant be less than 1
}

function displayBreak(time) {
//cant be less than 1
}

function resetTimer() {
	$('.reset').click(_ => {
		//resets to 25 - 5
	})
}