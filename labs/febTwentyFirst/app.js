let dangerDiv = document.getElementById("dangerDiv")

dangerDiv.style.height = "50" + "px";
dangerDiv.style.width = "50" + "px";


function checkDangerLevel() {
    let dangerLevel = Math.round(Math.random() * 10);
    dangerDiv.innerHTML = dangerLevel;
    if(dangerLevel > 7) {
        dangerDiv.style.backgroundColor = "#FF0000";
    } else if(dangerLevel > 4) {
        dangerDiv.style.backgroundColor = "#FF9900";
    }
    else {
        dangerDiv.style.backgroundColor = "#00FF00";
    }
}