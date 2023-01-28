//this code is not working, I am still using trial and error to figure out what is wrong with the y values, but I turned in three other working activities!


//declare global variables needed
let x=16 //starting x coordinate
let y=200 //starting y coordinate
let r=50 //declare radius variable and size

function setup() {
 createCanvas(800, 600); //create a canvas   
}

function draw() {
    background(200); //create background to erase trail
    circle(x, y, r); //create a ball
    x+=5; //set the ball's x speed
    y+=5;//set the ball's y speed
//if statement for ball being at left edge
if(x<=15) {
    x=-x;
   }
//if statement for ball being at right edge
    if(x>=800) {
         x=-x;
        }
//if statement for ball being at top edge
        if(y<=0) {
            y=-y;
        }
//if statement for ball being at bottom edge
        if(y>=600) {
            y=-y;
        }
        print("test");
//if the if statement is true, multiple by -1
    

}