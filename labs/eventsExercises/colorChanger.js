//Create an application with three grey, square divs, in a row. They should be 200px by 200px, and all floated left. Give them a margin of 5px.

//Using only one event handler, write event listeners to respond to a click on each element. Each element should change to a different color: one red, one green, and one blue. Use a data attribute on the elements to store the color to be changed to.

//algorithm start

//set up program with id for 3 divs
let redDiv = document.getElementById("redDiv");
let greenDiv = document.getElementById("greenDiv");
let blueDiv = document.getElementById("blueDiv");

//style starting divs
//red
redDiv.style.backgroundColor = "#808080";
redDiv.style.height = "200px";
redDiv.style.width = "200px";
redDiv.style.margin = "5px";
redDiv.style.float = "left";
//green
greenDiv.style.backgroundColor = "#808080";
greenDiv.style.height = "200px";
greenDiv.style.width = "200px";
greenDiv.style.margin = "5px";
greenDiv.style.float = "left";
//blue
blueDiv.style.backgroundColor = "#808080";
blueDiv.style.height = "200px";
blueDiv.style.width = "200px";
blueDiv.style.margin = "5px";
blueDiv.style.float = "left";

//add event listeners
redDiv.addEventListener("click", itsClicked);
blueDiv.addEventListener("click", itsClicked);
greenDiv.addEventListener("click", itsClicked);

//create a function
function itsClicked(event) {
    //create a var set to div clicked
    let changeDiv = event.target;
    //create a var set to div clicked's background color
    let divColor = changeDiv.getAttribute("value");
    //when div is clicked, change backgroundColor to value attribute
    changeDiv.style.backgroundColor = divColor;
}
    
    