  // Write a loop that creates three divs based on the data in the array. You should only have one document createElement in your code.
let umDiv = document.getElementById("umDiv");
  //insert array of objects
  let objects = [

    { color: "#FF0000", height: 100+"px", width: 300+"px" },
   
    { color: "#FFFF00", height: 200+"px", width: 200+"px" },
   
    { color: "#ff0000", height: 300+"px", width: 100+"px" },
   
   ];

    //create a for loop
    //inside that loop create an element with arguments from the objects entered
    for(let i=0;i<objects.length;i++) {
        let newEl = document.createElement("div");
        newEl.style.backgroundColor = objects[i].color;
        newEl.style.height = objects[i].height;
        newEl.style.width = objects[i].width;
        umDiv.appendChild(newEl);
    }
  