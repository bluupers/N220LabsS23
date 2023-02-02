

function setup() {
    //function setup
    createCanvas (800, 800); 
    //create a canvas 800x800
}

function draw() {
   //function draw 
let noRed = stopSign(color(170, 200, 150));
//function color with argument of 170,200,150
fill(noRed);
//fill with color value
ellipse(100, 100, 50, 50);
//draw circle to test function
}

function stopSign(c) {
    c.setRed(0);
    //take the name of that argument and .setRed0
    return c;
    //return the variable
}




