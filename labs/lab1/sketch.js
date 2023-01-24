let r = 10;
function setup() {
    createCanvas(800, 600);
    
}

//make it so circle radius can't grow over 50
function draw() { 
//draw circle at mouse location
circle(mouseX, mouseY, r);
//get bigger when pressed
if(mouseIsPressed) {
    r++;

}
//not get bigger than 50
if(r>=50) {
    r=50;
    
}
//if its at 50 or above
    //dont let it go above 50
}

