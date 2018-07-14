let timeBegan = null;
let stoppedDuration = null;
let started = null;
let timeStopped = null;
let laps = [];

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
    let lapReset=document.querySelectorAll('#lapsList ul');
    for(var i=0; ul=lapReset[i]; i++) {
    ul.parentNode.removeChild(ul);
}
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

// each time lap is pressed, the current time must be stored in an array.  
// each lap count then be appended to a table on the Dom 


//The following function prints the each lap and the previous laps using laps as an array.
/*
function lapsUL(laps){
	var list = document.createElement('ul');

	for (var i = 0; i < laps.length; i++){
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(laps[i]));
		list.appendChild(item);
	}
	return list;
};
*/

function lapsUL(laps){
    var list = document.createElement('ul');
    var item = document.createElement('li');
        item.appendChild(document.createTextNode(laps));
        list.appendChild(item);
        laps.pop();
    return list;
};

function lap(){ 
	laps.push(document.getElementById("display-area").innerHTML)
	document.getElementById('lapsList').appendChild(lapsUL(laps))
};

