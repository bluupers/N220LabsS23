function setup() {
    //function setup
    createCanvas(800, 800);
    //create canvas 800x800
}

function draw() {
  translate(100, 100);  
  //function draw  
  let res = polarPoint(10);
  //set variable equal to value of polar point
  
  //add translate(100,100); line before drawing methods
  ellipse(res.x, res.y, 10, 10);
  //draw a circle at res.x, res.y, and with a radius of 10

}


function polarPoint(r) {
   //function polarPoint 
   //add argument to polar point (r)
   let x = r * Math.sin(mouseX);
   //create an x variable and set it to r * Math.sin(mouseX);
   let y = r * Math.cos(mouseX);
   //create a Y variable, set it to the result of r * Math.cos(mouseX);
   return createVector(x, y);
   //return createVector(x, y);
}






