let coolThing = document.getElementById("coolThing");
function checkResponse(time) {
   if(time == "afternoon") {
    coolThing.innerHTML = "That is Correct";
   }
   else{
     coolThing.innerHTML = "Guess again";
     } 
}
