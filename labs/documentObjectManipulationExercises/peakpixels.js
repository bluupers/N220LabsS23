let box = document.getElementById("box");
let height = "100";
let width = "100";
box.style.backgroundColor = "#00FF00";
box.style.height = height + "px";
box.style.width = width + "px";


function sizeIncrease() {
    box.style.height = (height * 1.1) + "px";
    box.style.width = (width * 1.1) + "px";
// console.log(height);
}