function setup() {
    createCanvas(800, 800);
}
function draw() {
    background(200);
    drawBall(ball);
    }
function drawBall(ball) {
    let velocity = (ball.x+=ball.speed);
    fill(ball.color);
    circle(velocity , ball.position, ball.size);
    if(ball.x>=ball.rightEdge) {
        ball.x=ball.reset;
        }
    }
let ball = {
    reset: 0,
    x: 50,
    position: 200,
    size: 50,
    color: "#5bd3f5",
    speed: 5,
    rightEdge: 800
    }


    