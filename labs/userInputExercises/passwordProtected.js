//enable DOM with get elements by id variables declared
let usernameTxt = document.getElementById("usernameTxt");
let passwordTxt = document.getElementById("passwordTxt");
let resultDiv = document.getElementById("resultDiv");

//create function checkInfo
function checkInfo() {
    //if statement
    if(usernameTxt.value=="Username" && passwordTxt.value=="Password") {
        //set argument as boolean if username.value is equal to string "Username"
        //AND password.value is equal to "Password"
        //then update resultDiv to say "Success"
        resultDiv.innerHTML= "Success";
    } else {
        //ELSE update resultDiv to say "Wrong information"
        resultDiv.innerHTML= "Wrong Information";
    }
}