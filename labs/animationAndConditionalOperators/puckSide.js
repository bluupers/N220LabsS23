let r=10; //declare r as variable for radius with value of ten
function setup() {
createCanvas(400, 300); //create canvas and set size
}
function draw() {
circle(mouseX, mouseY, r); //draw circle where mouse is at
if(mouseX<150) {
  fill(0, 0, 255); //draw circle in blue if on left
  } else {
    fill(255, 0, 0); //draw circle in red if on right
  }
}