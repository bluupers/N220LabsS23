let musicalDiv = document.getElementById("musicalDiv");
musicalDiv.height = 800 + "px";
for(i=0; i<25; i++) {
    
    if(i%5 ==0 && i%3 == 0) {
        musicalDiv.innerHTML += "beepbop";
    } else if(i%5 == 0) {
        musicalDiv.innerHTML += "bop";
    } else if(i%3 == 0) {
        musicalDiv.innerHTML += "beep";
    } else { 
     musicalDiv.innerHTML += i;   
    }
    musicalDiv.innerHTML += "<br/>";
}
