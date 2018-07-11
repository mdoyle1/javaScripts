let timeBegan = null;
let stoppedDuration = null;
let started = null;
let timeStopped = null;

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function start() {
    // If time began is = to null timeBegan = new time

    if (timeBegan === null) {
        timeBegan = new Date();
    }else {
    	clearInterval(started);
    };

    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
    };
    
    if (stoppedDuration < 1000){
    	console.log(stoppedDuration+' ms');
    }

    else if (stoppedDuration < 60000){
    	console.log(stoppedDuration/1000+' seconds');
    }

    else if(stoppedDuration < 360000){
    	let stopMinutes=stoppedDuration/60000;
    	stopMinutes=round(stopMinutes,2);
    	console.log(stopMinutes+' minutes');
    }
    
    started = setInterval(clockRunning, 10);

    return stoppedDuration	
}

function stop() {
    timeStopped = new Date();
    clearInterval(started);
    return timeStopped
}
 
function reset() {
    clearInterval(started);
    stoppedDuration = null;
    timeBegan = null;
    timeStopped = null;
    document.getElementById("display-area").innerHTML = "00:00:00.000";
}

function clockRunning(){
    var currentTime = new Date()
        , timeElapsed = new Date(currentTime - timeBegan)
        , hour = timeElapsed.getUTCHours()
        , min = timeElapsed.getUTCMinutes()
        , sec = timeElapsed.getUTCSeconds()
        , ms = timeElapsed.getUTCMilliseconds(); 

    document.getElementById("display-area").innerHTML = 
        (hour > 9 ? hour : "0" + hour) + ":" + 
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};
