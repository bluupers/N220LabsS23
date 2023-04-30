/*
Hangman

1.  Array of 10 different words to guess, chosen at random at the start of the game 
//check

2. Grid of buttons of all letters to be guessed
//check

3. Canvas drawn using P5 with the gallows on it
    //check
4. When a button is clicked

    4a. deactivate it for this play session (set its disabled to true btnRef.setAttribute("disabled", true) )
    //check
    4b. Check to see if the selected letter is in the string
    //check
    4c. If its in the string, show the positions of the letters on the screen, separated by _ for unguessed letters, for the user to see
    //check
    4d. If its not in the string, draw the next step of the hangman (arms, legs, head, whatever) 
    //check
5. If the full body gets drawn, show the completed word and write "game over" at the top of the screen

6. If the user gets all the letters correct, display "You win" at the top of the screen.
//check
7. Include a button for resetting the game. Easy mode to reset is to reload the window (window.reload() ). Try to figure out how to do it without reloading the window.
*/

//global variables and DOM elements
let gameEndDiv = document.getElementById("gameEndDiv");
let alphabetDiv = document.getElementById("alphabetDiv");
let resetButton = document.getElementById("resetButton");
let artDiv = document.getElementById("artDiv");
let wordDiv = document.getElementById("wordDiv");
let aButton = document.getElementById("aButton");
let bButton = document.getElementById("bButton");
let cButton = document.getElementById("cButton");
let dButton = document.getElementById("dButton");
let eButton = document.getElementById("eButton");
let fButton = document.getElementById("fButton");
let gButton = document.getElementById("gButton");
let hButton = document.getElementById("hButton");
let iButton = document.getElementById("iButton");
let jButton = document.getElementById("jButton");
let kButton = document.getElementById("kButton");
let lButton = document.getElementById("lButton");
let mButton = document.getElementById("mButton");
let nButton = document.getElementById("nButton");
let oButton = document.getElementById("oButton");
let pButton = document.getElementById("pButton");
let qButton = document.getElementById("qButton");
let rButton = document.getElementById("rButton");
let sButton = document.getElementById("sButton");
let tButton = document.getElementById("tButton");
let uButton = document.getElementById("uButton");
let vButton = document.getElementById("vButton");
let wButton = document.getElementById("wButton");
let xButton = document.getElementById("xButton");
let yButton = document.getElementById("yButton");
let zButton = document.getElementById("zButton");

//event listeners for each button
aButton.addEventListener("click", itsClicked);
bButton.addEventListener("click", itsClicked);
cButton.addEventListener("click", itsClicked);
dButton.addEventListener("click", itsClicked);
eButton.addEventListener("click", itsClicked);
fButton.addEventListener("click", itsClicked);
gButton.addEventListener("click", itsClicked);
hButton.addEventListener("click", itsClicked);
iButton.addEventListener("click", itsClicked);
jButton.addEventListener("click", itsClicked);
kButton.addEventListener("click", itsClicked);
lButton.addEventListener("click", itsClicked);
mButton.addEventListener("click", itsClicked);
nButton.addEventListener("click", itsClicked);
oButton.addEventListener("click", itsClicked);
pButton.addEventListener("click", itsClicked);
qButton.addEventListener("click", itsClicked);
rButton.addEventListener("click", itsClicked);
sButton.addEventListener("click", itsClicked);
tButton.addEventListener("click", itsClicked);
uButton.addEventListener("click", itsClicked);
vButton.addEventListener("click", itsClicked);
wButton.addEventListener("click", itsClicked);
xButton.addEventListener("click", itsClicked);
yButton.addEventListener("click", itsClicked);
zButton.addEventListener("click", itsClicked);

//words in array
let words = [ "FEATHER", "FLOWER", "GAMER", "ASTRONAUT", "SANDWICH", "GOLDFISH", "COFFEE", "LAKE", "SUNSHINE", "PIXEL"];

let wordMath = Math.floor(Math.random()*10);
//console.log(wordMath);
let chosenWord = words[wordMath];
console.log(chosenWord);

let chosenArray = chosenWord.split("");
//console.log(chosenArray);

let counter = 0;

//set the number of underscores based on chosen word

for(let i=0; i<chosenArray.length; i++) {
    wordDiv.innerHTML += "_" + " ";
    
}
//console.log("length pre-split:" + wordDiv.innerHTML.length);
//split the word div's innerhtml to edit it with user input
let guessArray = wordDiv.innerHTML.split(" ");
//this will remove the space at the end
guessArray.pop();
//console.log("length post-split: " + guessArray.length);
//console.log("guess array: "+ guessArray);

//ability to check for win
let guessWord = guessArray.join(" ");
let actualWord = chosenArray.join(" ");

function reset() {
    //reset word
    let wordMath = Math.floor(Math.random()*10);
    console.log(wordMath);
    let chosenWord = words[wordMath];
    console.log(chosenWord);
    //reset lines
    let chosenArray = chosenWord.split("");
    console.log(chosenArray);
    wordDiv.innerHTML = "";
    for(let i=0; i<chosenArray.length; i++) {
    wordDiv.innerHTML += "_" + " ";
    }
    //umm maybe this will make it work
    let guessArray = wordDiv.innerHTML.split(" ");
    //this will remove the space at the end
    guessArray.pop();
    //console.log("length post-split: " + guessArray.length);
    //console.log("guess array: "+ guessArray);
    
    //ability to check for win
    let guessWord = guessArray.join(" ");
    let actualWord = chosenArray.join(" ");

    //reset buttons
    let buttons = document.getElementsByTagName('button');
    for(i=0; i< buttons.length; i++) {
        buttons[i].disabled = false;
    } 
    //reset div
    gameEndDiv.innerHTML = "";
    setup();
    //reset counter
    counter = 0;
}

//on button click
function itsClicked(event) {
    //console.log("event target is" + event.target);
    let btnRef = event.target;
    let letter = btnRef.innerHTML;
    //wordDiv.innerHTML = "";
    for(let i=0; i<chosenArray.length; i++) {
        //console.log("chosen array at i =" + chosenArray[i]);
        //if the letter is equal to the button, add it
        if(chosenArray[i]== letter) {
            //console.log("it works");
            //wordDiv.innerHTML += letter;

            //okay so this will change the underscore to a letter
            guessArray[i] = letter;
            //testing
            //console.log(guessArray);
            //display to player
            wordDiv.innerHTML = guessArray.join(" ");
            guessWord = guessArray.join(" ");
        } 
     }
        if(actualWord.includes(letter) == false) {
            //counter+=1;
            drawMan();
        } 
        //console.log("guess is " + guessWord);
        //console.log("actual is " + actualWord);  
        if(guessWord == actualWord) {
        gameEndDiv.innerHTML = "You Win!"
        //console.log("you win");
    }   
    
    btnRef.setAttribute("disabled", true);
        //OH SICK THAT MADE THE BUTTON DISAPPEAR
    
}



//art
function setup(){
    createCanvas(200, 200);
    background(245, 245, 220);
}
function draw() {
    //gallows upright line
    line(170, 30, 170, 170);
    //gallows top
    line(85, 30, 170, 30);
    //gallows bottom
    line(30, 170, 190, 170);
    //noose
    line(85, 30, 85, 40);
}
function drawMan() {
    counter += 1;
    if(counter == 1) {
        ellipse(85, 55, 30, 30);
    } else if(counter == 2) {
        line(85, 70, 85, 110);
    } else if(counter == 3) {
        line(85, 70, 65, 100);
    } else if(counter == 4) {
        line(85, 70, 105, 100);
    } else if(counter == 5) {
        line(85, 110, 70, 130);
    } else if(counter == 6) {
        line(85, 110, 100, 130);
        gameEndDiv.innerHTML = "word was: " + chosenWord + " Game Over :(";
    }

}