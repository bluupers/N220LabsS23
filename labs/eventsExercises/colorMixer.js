//This is an application that will start a div at a black color, and as a user presses buttons associated with RGB, the div will change to new colors. The button presses should affect additively - that is. If a div is currently blue, pressing +red buttons will change the div to a purple color.

//9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.

//1 div that will change colors to the rgb color calculated

//1 div that shows the current calculated rgb color

//algorithm start

//declare 9 buttons for DOM 
let redOne = document.getElementById("redOne");
let redFive = document.getElementById("redFive");
let redTen = document.getElementById("redTen");
let greenOne = document.getElementById("greenOne");
let greenFive = document.getElementById("greenFive");
let greenTen = document.getElementById("greenTen");
let blueOne = document.getElementById("blueOne");
let blueFive = document.getElementById("blueFive");
let blueTen = document.getElementById("blueTen");

//declare divs for DOM
let resultsDiv = document.getElementById("resultsDiv");
let colorDiv = document.getElementById("colorDiv");

//declare beginning color values
let red = 0;
let green = 0;
let blue = 0;
//style color changing div as black to begin with
resultsDiv.style.backgroundColor = "rgb" + "(0, 0, 0)";
resultsDiv.style.height = "300px";
resultsDiv.style.width = "300px";

//add an event listener for each button onclick
redOne.addEventListener("click", itsClicked);
redFive.addEventListener("click", itsClicked);
redTen.addEventListener("click", itsClicked);
greenOne.addEventListener("click", itsClicked);
greenFive.addEventListener("click", itsClicked);
greenTen.addEventListener("click", itsClicked);
blueOne.addEventListener("click", itsClicked);
blueFive.addEventListener("click", itsClicked);
blueTen.addEventListener("click", itsClicked);

//create a function for when a button is clicked
function itsClicked(event) {
    //declare a variable for the attribute data of the button
    let newRed = Number(event.target.getAttribute.data-red);
    let newGreen = Number(event.target.getAttribute.data-green);
    let newBlue = Number(event.target.getAttribute.data-blue);
    //create equations for the colors
    newRed = red + newRed;
    newGreen = green + newGreen;
    newBlue = blue + newBlue;
    console.log("newRed: " + newRed + " newGreen: " + newGreen + " newBlue: " + newBlue);
    //create a variable for new div color equivalent to the current rgb value of the div plus the variable value of the custom button attribute
    //so this holds final data for color change
    let newColor = "rgb" + "(" + newRed + "," + newGreen + "," + newBlue + ")";
    resultsDiv.style.backgroundColor = newColor;
    console.log(newColor);
    //set background color to new div color value
}
    