var hours=00;
var minutes=00;
var seconds=00;
var milliseconds=00;
var interval;
var h=document.getElementById("hours");
var m=document.getElementById("minutes");
var s=document.getElementById("seconds");
var ms=document.getElementById("milli-seconds");
var start=document.querySelector(".btn-start");
var stop=document.querySelector(".btn-stop");
var reset=document.querySelector(".btn-reset");
start.addEventListener("click",function(){
  clearInterval(interval);
  interval=setInterval(startTimer,10);
});
function startTimer(){
  milliseconds++;
  if(milliseconds<10){
    ms.innerHTML="0"+milliseconds;
  }
  if(milliseconds>10){
    ms.innerHTML=milliseconds;
  }
  if(milliseconds>=100){
    seconds++;
    s.innerHTML=seconds;
    milliseconds=0;
    ms.innerHTML="00";
  }
  if(seconds<10){
    s.innerHTML="0"+seconds;
  }
  if(seconds>10){
    s.innerHTML=seconds;
  }
  if(seconds>59){
    minutes++;
    m.innerHTML=minutes;
    seconds=0;
    s.innerHTML="00";
  }
  if(minutes<10){
    m.innerHTML="0"+minutes;
  }
  if(minutes>10){
    m.innerHTML=minutes;
  }
  if(minutes>59){
    hours++;
    h.innerHTML=hours;
    minutes=0;
    m.innerHTML="00";
  }
  if (hours < 10) {
    h.innerHTML = "0" + hours;
  }
}
// stop.addEventListener("click",function(){
//   clearInterval(interval);
// });
stop.addEventListener('click', function(){
  clearInterval(interval);
});

reset.addEventListener("click",function(){
  clearInterval(interval);
  seconds=00;
  milliseconds=00;
  minutes=00;
  hours=00;
  h.innerHTML = "0" + hours;
  m.innerHTML = "0" + minutes;
  s.innerHTML = "0" + seconds;
  ms.innerHTML = "0" + milliseconds;





});
