var timerId;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 20;
var color = '#8bc34a';
var g = 0.1; // acceleration due to gravity
var x = 50; // initial horizontal position
var y = 50; // initial vertical position
var vx = 2; // initial horizontal speed
var vy = 0; // initial vertical speed

window.onload = init;

function init() {
  timerId = setInterval(onEachStep, 1000/60); // fps - frames per second
}

function onEachStep() {
  vy += g; // gravity increases the vertical speed
  x += vx; // horizontal speed increases horizontal position
  y += vy // vertical speed increases vertical position

  if (y > canvas.height - radius) { // if ball hits the ground
    y = canvas.height - radius; // reposition it at the ground
    vy *= -0.8; // then reverse and reduce its vertical speed
    vx *= 0.9; // reduce horizontal speed under the influence of friction force
  }

  if (x > canvas.width + radius) { // if ball goes beyond canvas
    x = -radius; // wrap it around
  }
  drawBall(); // draw the ball
  
  if (vx < 0.1) { // if horizontal speed is very small
    clearInterval(timerId); // stop animation
  }
};

function drawBall() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, true);
  context.closePath();
  context.fill();
}