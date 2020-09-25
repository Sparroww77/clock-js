const hourhand=document.querySelector('#hour');
const minhand=document.querySelector('#minute');
const sechand=document.querySelector('#second');

function runClock() {
var date=new Date();
console.log(date);
let hr=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
console.log("Hour "+hr+" Minute "+min+ " Second "+sec);
let hrpos=hr+(min*(360/60)/12);
let minpos=min*360/60+(sec*(360/60)/60);
let secpos=sec*360/60;

hourhand.style.transform="rotate(" + hrpos + "deg)"
minhand.style.transform="rotate(" + minpos + "deg)"
sechand.style.transform="rotate(" + secpos + "deg)"
}
var interval=setInterval(runClock,1000);
