var printMillisec = 0;
var printSec = 0;
var printMinute = 0;

// stop() stops the counter from priting to the console
const stop = ()=> {clearInterval(stopwatch.printUnit)};

// timeInterval(unit and # of milliseconds) starts the counter using the given speed
var unit = 0;

let	stopwatch = (unit, milliseconds)=> {
let printUnit = ()=> console.log(unit=unit+1);
	setInterval (printUnit, milliseconds);
return 0}
