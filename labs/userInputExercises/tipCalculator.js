//enable DOM by linking subtotalInput input by id
let subtotal = document.getElementById("subtotalInput");
//create a function
function calculateTab() {
    let subtotalAmount = Number(subtotal.value);
    //create a variable called tipAmount
         //multiply the value entered by user by .2
    let tipAmount = subtotalAmount * 0.2;
    //console.log string "Tip: $" + tipAmount variable
    console.log("Tip: $" + tipAmount);
    //create a variable called totalAmount
        //add tipAmount value and subtotalInput input
    let totalAmount = tipAmount + subtotalAmount;
    //console.log string "Total: $" + totalAmount variable
    console.log("Total: $" + totalAmount);
}