let bike = {age:0, wear:0, color:"red", make:"huffy"}
function setup() {

}

function ageUp(someBike) {
    someBike.age ++;
    if(someBike.age>=5) {
        someBike.wear=100;
    }   
}

ageUp(bike);
ageUp(bike);
ageUp(bike);
ageUp(bike);
ageUp(bike);

console.log(bike);