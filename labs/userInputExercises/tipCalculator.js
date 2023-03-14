//enable DOM by linking subtotalInput input by id

//create a function

    //create a variable called tipAmount
         //multiply the value entered by user by .2 
    //console.log string "Tip: $" + tipAmount variable

    //create a variable called totalAmount
        //add tipAmount value and subtotalInput input
    //console.log string "Total: $" + totalAmount variable

let subtotal = document.getElementById("subtotalInput");

function calculateTab() {
    let subtotalAmount = Number(subtotal.value);
    let tipAmount = subtotalAmount * 0.2;
    console.log("Tip: $" + tipAmount);

    let totalAmount = tipAmount + subtotalAmount;
    console.log ("Total: $" + totalAmount);
}