//Blue Pinegar
//January 19, 2023
//N220

function setup() {
    //background water
createCanvas (800, 600);
background (0, 100, 255, 200);
}

function draw() {
    noStroke();
    //bubbles
    fill(0, 200, 255, 175); //color bubbles
    ellipse(700,100, 70, 70); //big bubble
    ellipse(650, 175, 50, 50); //medium bubble
    ellipse(630, 70, 25, 25); //small bubble

    //shark
    fill(128); //shark color
    triangle(100, 200, 100, 450, 300, 325); //tail
    ellipse(400, 325, 450, 250); //body
    triangle(400, 100, 275, 270, 525, 270); //fin
    fill(0); //eye color
    ellipse(555, 300, 20, 20); //eye
    stroke(0); //mouth line
    line(550, 350, 620, 350); //mouth position
}
 