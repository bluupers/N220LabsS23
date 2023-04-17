let myAudio = document.getElementById("myAudio");
let uiHolder = document.getElementById("uiHolder");
document.body.addEventListener("keydown", playAudio);


for(let i=0; i < 6; i++) {
    let newElement = document.createElement("button");
    newElement.innerHTML = 1;
    newElement.dataset.startPosition = i * 18;
    newElement.addEventListener("click", playAudio);
    uiHolder.appendChild(newElement);
}

function playAudio(event) {
    myAudio.currentTime= event.target.dataset.startPosition;
    console.log(event);
    myAudio.play( );

    // setTimeout(stopAudio, 3000);
    setTimeout(function () {
        myAudio.pause();
    }, 3000);
}

// function stopAudio() {
//     myAudio.pause();
// }