let testElement = document.getElementById("testElement");
console.log(testElement);

testElement.innerHTML = "New text from JavaScript";
testElement.style.color = "#B5B682";
testElement.style.width = 200 + "px";
testElement.style.backgroundColor = "#7C9885";

function doThing() {
    testElement.style.color = "#815355";
    testElement.style.backgroundColor = "#523249"
}

function tryThis() {
    testElement.style.color = "#F68E5F"
    testElement.style.backgroundColor = "#F5DD90"
}