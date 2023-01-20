let time = document.getElementById("time");
function mytime(){
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
let daylight = "AM";

daylight = hours>12?"PM":"AM";

hours = hours>12?hours-12:hours;
hours = hours<10?"0"+hours:hours;

minutes = minutes<10?"0"+minutes:minutes;
seconds = seconds<10?"0"+seconds:seconds;

console.log(hours,minutes,seconds);
time.innerHTML = `${hours}:${minutes}:${seconds} ${daylight}`;

}
setInterval(mytime,500);