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

//declare one changing div for DOM
let resultsDiv = document.getElementById("resultsDiv");
let colorDiv = document.getElementById("colorDiv");

//style color changing div as black to begin with
resultsDiv.style.backgroundColor = "rgb" + (0, 0, 0);
resultsDiv.style.height = "300px";

//give each button an attribute of the amount they adjust

//add an event listener for each button onclick

//create a function for when a button is clicked
    //declare a variable for the attribute data of the button
    //create a variable for new div color equivalent to the current rgb value of the div plus the variable value of the custom button attribute
    //set background color to new div color value