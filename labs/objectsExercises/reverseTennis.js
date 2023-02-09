function setup() {
    createCanvas(650, 500);
}
function draw() {
    background(200);
    drawLeftRectangle(leftRectangle);
    drawRightRectangle(rightRectangle);
    if(keyIsDown(UP_ARROW)) {
        leftRectangle.y++;
        rightRectangle.y--;
    }
    if(keyIsDown(DOWN_ARROW)) {
        leftRectangle.y--;
        rightRectangle.y++;
    }
}

function drawLeftRectangle(leftRectangle) {
rect(leftRectangle.x, leftRectangle.y, leftRectangle.width, leftRectangle.height);
}
function drawRightRectangle(rightRectangle) {
    rect(rightRectangle.x, rightRectangle.y, rightRectangle.width, rightRectangle.height);
}

let leftRectangle = {
    x: 20,
    y: 200,
    width: 30,
    height: 150
};
let rightRectangle = {
    x: 600,
    y: 200,
    width: 30,
    height: 150
};
