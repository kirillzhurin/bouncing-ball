function Ball(radius, color) {
  this.radius = radius;
  this.color = color;
  this.x = 0; // initial horizontal position
  this.y = 0; // initial vertical position
  this.vx = 0; // initial horizontal speed
  this.vy = 0; // initial vertical speed
}

Ball.prototype.draw = function(context) {
  context.fillStyle = this.color;
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
  context.closePath();
  context.fill();
}