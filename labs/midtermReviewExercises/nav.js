/*UI Navigation Highlighter

Make an application with six divs on the screen, each with a different word.

When any of the divs is clicked,

highlight that that div by changing its background color and making the text bold
remove the bold/background highlight from any other divs
add the clicked div's text into a seperate div at the top of the screen*/

//declare variable to easily manipulate HTML attributes
let redDiv = document.getElementById("redDiv");
let orangeDiv = document.getElementById("orangeDiv");
let yellowDiv = document.getElementById("yellowDiv");
let greenDiv = document.getElementById("greenDiv");
let blueDiv = document.getElementById("blueDiv");
let purpleDiv = document.getElementById("purpleDiv");
let titleDiv = document.getElementById("titleDiv");

function highlightRed() {
    //bold text
    redDiv.style.fontWeight = "bold";
    //change top div to display text
    titleDiv.innerHTML = "Red";
    //change background color
    redDiv.style.backgroundColor = "#FF0000";
    //remove bold from any other div
    orangeDiv.style.fontWeight = "normal";
    yellowDiv.style.fontWeight = "normal";
    greenDiv.style.fontWeight = "normal";
    blueDiv.style.fontWeight = "normal";
    purpleDiv.style.fontWeight = "normal";
    //remove background color from any other div
    orangeDiv.style.backgroundColor = "#FFFFFF";
    yellowDiv.style.backgroundColor = "#FFFFFF";
    greenDiv.style.backgroundColor = "#FFFFFF";
    blueDiv.style.backgroundColor = "#FFFFFF";
    purpleDiv.style.backgroundColor = "#FFFFFF";
}

function highlightOrange() {
    //bold text
    orangeDiv.style.fontWeight = "bold";
    //change top div to display text
    titleDiv.innerHTML = "Orange";
    //change background color
    orangeDiv.style.backgroundColor = "#FFA500";
    //remove bold from any other div
    redDiv.style.fontWeight = "normal";
    yellowDiv.style.fontWeight = "normal";
    greenDiv.style.fontWeight = "normal";
    blueDiv.style.fontWeight = "normal";
    purpleDiv.style.fontWeight = "normal";
    //remove background color from any other div
    redDiv.style.backgroundColor = "#FFFFFF";
    yellowDiv.style.backgroundColor = "#FFFFFF";
    greenDiv.style.backgroundColor = "#FFFFFF";
    blueDiv.style.backgroundColor = "#FFFFFF";
    purpleDiv.style.backgroundColor = "#FFFFFF";
}

function highlightYellow() {
    //bold text
    yellowDiv.style.fontWeight = "bold";
    //change top div to display text
    titleDiv.innerHTML = "Yellow";
    //change background color
    yellowDiv.style.backgroundColor = "#FFFF00";
    //remove bold from any other div
    redDiv.style.fontWeight = "normal";
    orangeDiv.style.fontWeight = "normal";
    greenDiv.style.fontWeight = "normal";
    blueDiv.style.fontWeight = "normal";
    purpleDiv.style.fontWeight = "normal";
    //remove background color from any other div
    redDiv.style.backgroundColor = "#FFFFFF";
    orangeDiv.style.backgroundColor = "#FFFFFF";
    greenDiv.style.backgroundColor = "#FFFFFF";
    blueDiv.style.backgroundColor = "#FFFFFF";
    purpleDiv.style.backgroundColor = "#FFFFFF";
}
function highlightGreen() {
    //bold text
    greenDiv.style.fontWeight = "bold";
    //change top div to display text
    titleDiv.innerHTML = "Green";
    //change background color
    greenDiv.style.backgroundColor = "#00FF00";
    //remove bold from any other div
    redDiv.style.fontWeight = "normal";
    orangeDiv.style.fontWeight = "normal";
    yellowDiv.style.fontWeight = "normal";
    blueDiv.style.fontWeight = "normal";
    purpleDiv.style.fontWeight = "normal";
    //remove background color from any other div
    redDiv.style.backgroundColor = "#FFFFFF";
    orangeDiv.style.backgroundColor = "#FFFFFF";
    yellowDiv.style.backgroundColor = "#FFFFFF";
    blueDiv.style.backgroundColor = "#FFFFFF";
    purpleDiv.style.backgroundColor = "#FFFFFF";
}
function highlightBlue() {
    //bold text
    blueDiv.style.fontWeight = "bold";
    //change top div to display text
    titleDiv.innerHTML = "Blue";
    //change background color
    blueDiv.style.backgroundColor = "#0000FF";
    //remove bold from any other div
    redDiv.style.fontWeight = "normal";
    orangeDiv.style.fontWeight = "normal";
    yellowDiv.style.fontWeight = "normal";
    greenDiv.style.fontWeight = "normal";
    purpleDiv.style.fontWeight = "normal";
    //remove background color from any other div
    redDiv.style.backgroundColor = "#FFFFFF";
    orangeDiv.style.backgroundColor = "#FFFFFF";
    yellowDiv.style.backgroundColor = "#FFFFFF";
    greenDiv.style.backgroundColor = "#FFFFFF";
    purpleDiv.style.backgroundColor = "#FFFFFF";
}
function highlightPurple() {
    //bold text
    purpleDiv.style.fontWeight = "bold";
    //change top div to display text
    titleDiv.innerHTML = "Purple";
    //change background color
    purpleDiv.style.backgroundColor = "#A020F0";
    //remove bold from any other div
    redDiv.style.fontWeight = "normal";
    orangeDiv.style.fontWeight = "normal";
    yellowDiv.style.fontWeight = "normal";
    greenDiv.style.fontWeight = "normal";
    blueDiv.style.fontWeight = "normal";
    //remove background color from any other div
    redDiv.style.backgroundColor = "#FFFFFF";
    orangeDiv.style.backgroundColor = "#FFFFFF";
    yellowDiv.style.backgroundColor = "#FFFFFF";
    greenDiv.style.backgroundColor = "#FFFFFF";
    blueDiv.style.backgroundColor = "#FFFFFF";
}