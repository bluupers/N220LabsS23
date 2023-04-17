//An application with 3 buttons that ask questions. For instance, they might ask "What is the capital of Indiana?". Each button should have a data-answer attribute that lists the answer.

//When a button is clicked, display the answer to the button's question in a div. Use only one function, and that function must make use of the button's data-attribute.

//algorithm start

//declare buttons as document get element by ids
let connecticutButton = document.getElementById("connecticutButton");
let oregonButton = document.getElementById("oregonButton");
let ohioButton = document.getElementById("ohioButton");

//give each button a custom attribute that has the correct answer to the question
    //let connecticutAnswer = connecticutButton.getAttribute("value");
    //let oregonAnswer = oregonButton.getAttribute("value");
    //let ohioAnswer = ohioButton.getAttribute("value");

//declare a div to display correct answers
let answerDiv = document.getElementById("answerDiv");

//add event listeners to each button
connecticutButton.addEventListener("click", itsClicked);
oregonButton.addEventListener("click", itsClicked);
ohioButton.addEventListener("click", itsClicked);

//function for when button is clicked
function itsClicked(event) {
    console.log(event.target);
    let capital = event.target.getAttribute("value");
    //edit the inner HTML of the answer display div to show attribute data
    answerDiv.innerHTML = capital;
}
   

