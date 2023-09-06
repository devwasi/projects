// 
var stopWatch = document.getElementById("stopWatch");
var timerWatch = document.getElementById("timer");

function switchTimer(){
stopWatch.classList.toggle("hidden")
timerWatch.classList.toggle("hidden")
}






// ==========================> STOP WATCH START =======================

var min = 0;
var sec = 0;
var msec = 0;
var interval;
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")

// buttons start stop and reset
var startBtn = document.getElementById("startBtn")
var stopBtn = document.getElementById("stopBtn")
var resetBtn = document.getElementById("resetBtn")

function swTimer(){
msec++;
msecHeading.innerHTML = msec
if(msec >= 100){
    sec ++;
    secHeading.innerHTML = sec;
    msec = 0;                 
}else
if(sec >= 59){
min ++;
minHeading.innerHTML = min;
sec = 0;
}
}

function start(){
   interval =  setInterval(swTimer,10);
   startBtn.classList.add("hidden");
   stopBtn.classList.remove("hidden");
   resetBtn.classList.remove("hidden");
}

function stop(){
    clearInterval(interval);
    startBtn.classList.remove("hidden")
   stopBtn.classList.add("hidden")
}

function reset(){
    min = "00";
 sec = "00";
 msec = "00";

 minHeading.innerHTML = min;
 secHeading.innerHTML = sec;
 msecHeading.innerHTML = msec;

 startBtn.classList.remove("hidden")
 stopBtn.classList.add("hidden")
 resetBtn.classList.add("hidden")
 stop()

}

// ==========================> STOP WATCH START =======================

// ==========================> TIMER START =======================



var timerMin = 4;
var timerSec = 60;
var timerMsec = 100;
var interval;
var timerMinHeading = document.getElementById("timerMin")
var timerSecHeading = document.getElementById("timerSec")
var timerMsecHeading = document.getElementById("timerMsec")

// buttons start stop and reset
var timerStartBtn = document.getElementById("timerStartBtn")
var timerStopBtn = document.getElementById("timerStopBtn")
var timerResetBtn = document.getElementById("timerResetBtn")

function timer(){
    timerMsec--;
    timerMsecHeading.innerHTML = timerMsec;
    if(timerMsec <=0){
        timerSec--;
        timerSecHeading.innerHTML = timerSec;
        timerMsec = 100;
    }
    else if(timerSec <= 0){
        timerMin--;
        timerMinHeading.innerHTML = timerMin;
        timerSec = 60
    }


}

function timerStart(){
   
    interval = setInterval(timer,10);
    timerStartBtn.classList.add("hidden")
    timerStopBtn.classList.remove("hidden")
    timerResetBtn.classList.remove("hidden")
}

function timerStop(){
    clearInterval(interval);
    timerStartBtn.classList.remove("hidden");
    timerStopBtn.classList.add("hidden");
}

function timerReset(){
    timerStop()
     timerMin = 4;
     timerSec = 60;
     timerMsec = 100;

    timerMinHeading.innerHTML = "05";
    timerSecHeading.innerHTML = "00";
    timerMsecHeading.innerHTML = "00";

    timerStartBtn.classList.remove("hidden")
    timerStopBtn.classList.add("hidden")
    timerResetBtn.classList.add("hidden");

}