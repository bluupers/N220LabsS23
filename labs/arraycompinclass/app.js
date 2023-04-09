let grid = [
    [0, 0, 0],
    [2, 2, 2],
    [0, 0, 0]
];

let res = grid[1].filter( function(entry) {
    return entry ==2;
})

if(res.length == 3) {
    console.log("A win");
}
console.log(res);