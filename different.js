// for(let i = 0; i <=10; i++){
//     if(i %2 !== 1){
//         console.log(i);
//     }
// }

// for(let i = 1; i <= 30; i++){
//     if(i% 3 == 0){
//         console.log(i);
//     }
// }
let sum = 0
for(let i = 1; i <= 30; i++){
    if(i% 3 == 0 && i%5 == 0){
        console.log(i);
        sum += i;
    }
}
console.log(sum);