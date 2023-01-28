let r=50 //declare global variables needed
let x=26
function setup() {
createCanvas(800, 600); //create a canvas
}
function draw() {
    background(200);
circle(x, 300, r); //create a circle on left half of screen
x+=5; //increase the value of x so that the circle moves forward
//create an if statement to note when the circle is off the screen
if(x>=800) {
    x=0; //if true the shape will move to the left edge
}


}