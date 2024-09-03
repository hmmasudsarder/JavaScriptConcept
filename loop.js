// decremental 

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }
let sume = 0;
for (let i = 0; i <= 10; i++) {
    if(i % 3 === 0){
        sume += i
    }
    console.log(i);
}

console.log("some", sume);