var requestId, ball;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var g = 0.1; // acceleration due to gravity

window.onload = init;

function init() {
  ball = new Ball(50, '#8bc34a');
  ball.x = 50;
  ball.y = 50;
  ball.vx = 2.5;
  animFrame();
}

function animFrame() {
  requestId = requestAnimationFrame(animFrame, canvas);
  onEachStep();
}

function onEachStep() {
  ball.vy += g; // gravity increases the vertical speed
  ball.x += ball.vx; // horizontal speed increases horizontal position
  ball.y += ball.vy; // vertical speed increases vertical position
  if (ball.y > canvas.height - ball.radius) { // if ball hits the ground
    ball.y = canvas.height - ball.radius; // reposition it at the ground
    ball.vy *= -0.8; // then reverse and reduce its vertical speed
    ball.vx *= 0.9; // reduce horizontal speed under the influence of friction force
  }

  if (ball.x > canvas.width + ball.radius) { // if ball goes beyond canvas
    ball.x = -ball.radius; // wrap it around
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw(context);
  
  if (ball.vx < 0.1) { // if horizontal speed is very small
    cancelAnimationFrame(requestId); // stop animation
  }
};