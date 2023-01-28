let lastMouse = { x: 0, y: 0 }; //declare variable as top left coord

function setup() {
  createCanvas(400, 400); //create space to draw
}

function draw() {
  background(220); //create background grayscale
  
  if(mouseIsPressed) {
    lastMouse.x = mouseX; //changes X coord from 0 to mouse location
    lastMouse.y = mouseY; //changes Y coord from 0 to mouse location
  }
  
  let lineDistance = distance( lastMouse, { x: mouseX, y: mouseY }); //define line distance. will measure from last mouse location to current mouse location
  
  if(lineDistance > 120) {
    stroke("#FF0000"); //turns line red
  }
  else {
    stroke("#000000"); //turns line black
  }
  
  line(lastMouse.x, lastMouse.y, mouseX, mouseY); //draws line from top left to where mouse is
}

function distance(p1, p2) { //define 2 parameters to calculate distance
  
  let dx = p1.x - p2.x; //x distance equals first parameter of x minus second parameter of x
  let dy = p1.y - p2.y; //y distance equals first parameter of y minus second parameter of y
  
  //return the distance
  return Math.sqrt(dx*dx + dy*dy); //finds line distance
}