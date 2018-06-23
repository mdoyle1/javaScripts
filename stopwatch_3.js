/*
Units of Time
Mark J. Doyle Jr.

Type stopwatch in the the console and select your unit ex. stopwatch(millisec)
Type stop() to stop printing to the console log
*/
const millisec = 1;
const sec = 1000
const minute = 60000
let interval = 0;
var process;
let printIntiger = ()=> console.log(interval=interval+1)
let stopTime =  (unit)=> {process=setInterval (printIntiger, unit)};
const stop = ()=> {clearInterval(process)};


let	stopwatch = (unit)=> {
stopTime(unit);
return interval}
