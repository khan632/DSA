// you can get problem statement from problem.md file


// problem 1:
// corner case to ask:
// 1. n = 0
// 2. n = -ve

function countDigit(n) {
    if(n == 0) return 1; // for n = 0 ask interviewer what he wants
    if(n < 0) n = n * -1;
    let count = 0;
    while(n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

function palindromeNum(n) {
    if(n < 0) return false;

    let reverseNum = reverse(n);
    return reverseNum === n;

}
function reverse(n) {
    let ans = 0;
    while(n > 0) {
        let lastDigit = n % 10;
        ans = ans * 10 + lastDigit;
        n = Math.floor(n / 10);
    }
    return ans;
}

function GCD(dividend,divisor) { 
    while(dividend % divisor != 0) {
        let rem = dividend % divisor;
        dividend = divisor;
        divisor = rem;
    }
    return divisor;
}

function printPrimeFactor(n) {
    let i = 2;
    while(n > 1) {
        if(n % i === 0) {
            console.log(i+ " ");
            n = Math.floor(n / i);
        }else {
            i++
        }
    }
}

//PASCAL TRINAGLE
// use formula to find nCr each row and print
//O(n^3)
function pascalTriangle(triangleSize) {
    const arr =[];
    for(let row = 1; row <= triangleSize; row++) {
        const innerArray = [];
        for(let col = 1; col <= row; col++) {
            innerArray.push(getnCr(row-1, col-1));
        }
        arr.push(innerArray);
    }
    return arr;
}


function getnCr(n,r) {
    let result = 1;
    for(let i = 0; i < r; i++) {
        result = result * (n - i);
        result = Math.floor(result / (i+1));
    }
    return result;
}



console.log(pascalTriangle(7));
console.log(getnCr(5,3));
// printPrimeFactor(378)
// console.log(GCD(60, 36));
// console.log(palindromeNum(121));
// console.log(palindromeNum(-121));
// console.log(palindromeNum(1222));
// console.log(countDigit(9980976));
// console.log(countDigit(-998));