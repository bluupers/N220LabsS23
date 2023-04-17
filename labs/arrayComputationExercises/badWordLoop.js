/*For the purposes of this exercise, bad words are: clear, water, tires.

Create an application that:

Takes input from a user using a simple text input field.
Splits the string on spaces
Loops through  the array looking for bad words in the array
Adds 1 to a tally count when a bad word is found
Outputs to the document
If any bad words were found (found / not found)
How many bad words, in total, were found
Clears out the text field so the user can input a new string*/

//setup
let resultsDiv = document.getElementById("resultsDiv");
let userWords = document.getElementById("userWords");
let count=0;

//function
//split string input on spaces
function itsClicked() {

    let statement = userWords.value;
    let splitStatement = statement.split(" ");
    console.log(splitStatement);

    //create a for loop
    for(let i=0; i<statement.length; i++) {
        console.log(count);
        //each loop check if each entry is equal to the bad words
        
        if(((splitStatement[i] == "clear") || (splitStatement[i] == "water")) || (splitStatement[i] == "tires")) {
            //if true then add one to a variable count
            count += 1;
            console.log("Count:" + count);
            resultsDiv.innerHTML = "Found" + "  Amount: " +  count;
            userWords.value= "";
            // count = 0;
        }
    }
}


    
    
    //display to div found
    //display to div amount of bad words found
    //clear input

    //if false display to div not found
    //clear input
