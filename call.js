const obj = { x: 42 };
function printX(y, z) { console.log(this.x + y + z); }
printX.apply(obj, [8, 10]); 