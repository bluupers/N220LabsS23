function setup() {
    createCanvas(800, 800);
}
function draw() {
    drawDog(dog);
}
function drawDog(dog) {
    fill(dog.headColor);
    ellipse(dog.headX, dog.headY, dog.headWidth, dog.headHeight);
    fill(dog.earColor);
    triangle(dog.earOneFirst, dog.earOneFirst, dog.earOneSecond, dog.earOneSecond, dog.earOneThirdX, dog.earOneThirdY);
    triangle(dog.earTwoFirstX, dog.earTwoFirstY, dog.earTwoSecondX, dog.earTwoSecondY, dog.earTwoThirdX, dog.earOneThirdY);
}
let dog = {
    headHeight: 30,
    headWidth: 30,
    headX: 50,
    headY: 50,
    headColor: "#964B00",
    earOneFirst: 40,
    earOneSecond: 30,
    earOneThirdX: 15,
    earOneThirdY: 60,
    earTwoFirstX: 60,
    earTwoFirstY: 40,
    earTwoSecondX: 70,
    earTwoSecondY: 30,
    earTwoThirdX: 85,
    earColor: "#5C4033"
};