let txtName = document.getElementById("txtName");
let moneyHeld = document.getElementById("moneyHeld");

function updateInput() {
    let moneyHeldAmount = Number(moneyHeld.value);
    txtName.value = moneyHeldAmount + 5;
}

function doThing() {
    /*if(txtName.value == "hamburger") {
        if(moneyHeld.value > 75) {
          txtName.style.borderColor = "#00ff00"; 
          document.body.style.backgroundColor = "#000";
        }
    }*/
    if(txtName.value == "hamburger" && moneyHeld.value > 75) {
          txtName.style.borderColor = "#00ff00"; 
          document.body.style.backgroundColor = "#000";
    }
}