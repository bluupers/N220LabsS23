/*Create an application that:

Takes in a list of comma-separated numbers from the user

Splits that list into an array of numbers

Converts the string version of the numbers into number versions

Loops through the array and sums up the values

Calculates the average of the array

Displays to the user
    The average
    The sum
Removes the text from the input so the user can type in new numbers*/


//split string on commas
//put pieces into an array
//convert string to Number

//for loop
//sum the array up
    //display that in a div
//divide the array by its length
    //display that in a div
//remove input text

let displayDiv = document.getElementById("displayDiv");
let userNumbers = document.getElementById("userNumbers");
let createArray = document.getElementById("createArray");
let secondDiv = document.getElementById("secondDiv");
let sum=0;
let average=0;
function itsClicked() {
    //break the string
    let numberList = userNumbers.value;
    console.log(numberList);
    let splitNumbers = numberList.split(",");
    console.log(splitNumbers);

    //do the array stuff in a for loop
    for(let i = 0; i<splitNumbers.length; i++) {
        
        sum+= Number(splitNumbers[i]);
        average = sum/splitNumbers.length;

    }
    displayDiv.innerHTML = sum;
    secondDiv.innerHTML = average;


}
 

