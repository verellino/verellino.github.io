const ball = document.querySelector("div.ball");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.1;
function animate() {
  let distanceX = mouseX - ballX;
  let distanceY = mouseY - ballY;

  ballX = ballX + distanceX * speed;
  ballY = ballY + distanceY * speed;

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
});