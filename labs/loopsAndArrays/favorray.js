let favList = document.getElementById("favList");

let favorites = ["My stinky girlfriend, Kellyn", "Lofi beats to study/relax to", "Persona 5", "McDonald's Sweet Tea", "Hawks from My Hero Academia"]
for(i=0; i<favorites.length; i++) {
let itemAtIndex = favorites[i];
console.log(itemAtIndex);
favList.innerHTML += itemAtIndex + `, is one of my favorite things.<br/>`;
}
