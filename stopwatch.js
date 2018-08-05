let timeBegan = null;
let stoppedDuration = null;
let started = null;
let timeStopped = null;
let laps = '';
var updateTime = null;
var constTime = null;


function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};

function start() {

    if (timeBegan === null) {
        timeBegan = new Date();

    }
    else {
    	clearInterval(started);
    };

/* This finds the stopwatch stop duration by taking the current
time and subtracting the timeStopped variable recorded with the 
stop button
*/
    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
    };
    
    /* The following logic converts the stopDuration time 
    to print to the console nicely.  This can be made into 
    another funcion and removed from the current function.
    */

    if (stoppedDuration < 1000){
    	console.log(stoppedDuration+' ms');
    }

    else if (stoppedDuration < 60000){
        let seconds = stoppedDuration/1000+' seconds';
    	console.log(seconds);
    

    }

    else if(stoppedDuration < 360000){
    	let stopMinutes=stoppedDuration/60000;
    	stopMinutes=round(stopMinutes,2);
    	console.log(stopMinutes+' minutes');
    }
    
    started = setInterval(clockRunning, 10);

return stoppedDuration

};

function stop() {
    
    timeStopped = new Date();
    clearInterval(started);
    return timeStopped
};
 
function reset() {
    clearInterval(started);
    stoppedDuration = null;
    timeBegan = null;
    timeStopped = null;
    document.getElementById("display-area").innerHTML = "00:00:00.000";
    let lapReset=document.querySelectorAll('#lapList li');
    for(var i=0; ul=lapReset[i]; i++) {
    ul.parentNode.removeChild(ul);
}
};

function clockRunning(){

     var currentTime = new Date()
        , timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
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

function lap(){ 
    laps = document.getElementById("display-area").innerHTML;
    let ul = document.getElementById("lapList");
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(laps));
	ul.appendChild(li);
};

