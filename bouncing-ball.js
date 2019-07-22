var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var radius = 20;
var color = '#00ff00';

var g = 0.1; // acceleration due to gravity
var x = 50; // initial horizontal position
var y = 50; // initial vertical position
var vx = 2; // initial horizontal speed
var vy = 0; // initial vertical speed

window.onload = init;

function init() {
  setInterval(onEachStep, 10000/60); // fps - frames per second
}

function onEachStep() {
  
}
