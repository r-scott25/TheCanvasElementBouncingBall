let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;


/* moveBall function is responsible for 
moving the ball across the screen and 
changing its direction once it reaches the left or right side of the screen. */

function moveBall() {
  if (position + radius > 640) {
    moveSpeed = -speed;
  } else if (position - radius < 0) {
    moveSpeed = speed;
  }
  position += moveSpeed;
}


/*
 drawBall function clears the canvas area using context.clearRect.  
 It then draws the ball in its current position using the
 context.beginPath, context.arc and context.Fill functions. */

function drawBall() {
  context.clearRect(0, 0, 640, 480);

  context.fillStyle = "#62687f";
  context.beginPath();
  context.arc(position, 50, radius, 0, 2 * Math.PI);
  context.fill();
}


/* animate function calls the move ball and draw ball functions 
After doing this, it then calls window.requestAnimationFrame to
schedule the animate function to be called again at the end of the file 
 */

function animate() {
  moveBall();
  drawBall();

  window.requestAnimationFrame(animate);
}

// call window.requestAnimationFrame(animate); to start the animation function

window.requestAnimationFrame(animate);
