"use strict";

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let elem = document.querySelector('#elem');
start.style.color = 'green';
stop.style.color = 'red'
let i = 100;
let timerId;
function func() {
    timerId = setInterval(()=> {
        elem.textContent = i--;
        if (i<0) {
         clearInterval(timerId);
         start.style.display = 'none';
         stop.style.display = 'none';
         elem.textContent = 'BOOM!!!'
         elem.style.fontSize = '100px'
        }
     }, 50);
     start.removeEventListener('click',func);
    
}
function func2() {
    clearInterval(timerId);
    start.addEventListener('click',func);

}

start.addEventListener('click', func);
stop.addEventListener('click',func2);