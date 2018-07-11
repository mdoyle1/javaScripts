var stopwatch;
var print = 0
function stopWatchFunction (){
	stopwatch = setInterval (timerFunc, 1000);
}

function timerFunc(){
	console.log(print=print+1)
}

//clearInterval(stopwatch) to stop the process!!
