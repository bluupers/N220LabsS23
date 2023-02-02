//function setup
//create a canvas 800x800
function setup() {
    createCanvas(800, 800);
    
}
//function draw
function draw() {
    background(250);
   drawMug(mouseX, mouseY); //invoke function at current x and y location of mouse
}
//create function to draw mug
function drawMug(x, y) { //create draw mug function

    noFill();                //turns off fill for handle
    stroke(0, 150, 100);     //sets stroke color
    strokeWeight(5);         //sets stroke weight for handle
    ellipse(x, y+27, 20, 30); //handle
    stroke(0, 150, 100);     //sets stroke color
    fill(0, 150, 100);       //sets fill color
    strokeWeight(1);         //sets stroke weight
    ellipse(x+20, y+50, 40, 20); //create ellipse for bottom of mug
    rect(x, y, 40, 50);    //create rectangle for body of mug
    fill(181, 101, 29);      //sets fill color
    ellipse(x+20, y, 40, 20); //create ellipse for top of mug

//end of draw mug function
}



