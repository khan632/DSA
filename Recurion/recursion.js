function  firstNNumber(n) {
    if (n === 0) return 0;
    return n + firstNNumber(n-1);
}

// function fact(n) {
//     if(n === 1) return 1;
//     return n = n * fact(n-1);
// }
let n = 5;


console.log(firstNNumber(n));


// console.log(fact(n));
