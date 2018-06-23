var printMillisec = 0;
var printSec = 0;
let printMinute = 0;
var stopTime;

// stop() stops the counter from priting to the console
const stop = ()=> {clearInterval(stopTime)};

// timeInterval(unit and # of milliseconds) starts the counter using the given speed
var unit = 0;

let	stopwatch = (unit, milliseconds)=> {
let printUnit = ()=> console.log(unit=unit+1);
stopTime = setInterval (printUnit, milliseconds);
return unit}
