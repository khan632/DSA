
// function  firstNNumber(n) {
//     if (n === 0) return 0;
//     return n + firstNNumber(n-1);
// }

// function fact(n) {
//     if(n === 1) return 1;
//     return n = n * fact(n-1);
// }

// function isPowerOfTwo(n) {
//     if(n === 1) return true;
//     else if(n % 2 !== 0 || n < 1) return false;
//     return isPowerOfTwo(n/2);
// }

function fib(num) {
    if(num <= 1) return num;
    return fib(num-1) + fib(num-2);
}
let n = 5;

console.log(fib(7));

// console.log(firstNNumber(n));
// console.log(isPowerOfTwo(n));


// console.log(fact(n));
