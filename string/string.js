let str = '   fly me   to   the moon333  ';

function lengthOfLastWord1(s) {
    s = s.trim();
    let count = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] !== ' ') count++;
        else break;
    }
    return count;
}

function lengthOfLastWord2(s) {
    // find length
    let n = s.length - 1;
    let count = 0;

    // trim all spaces
    while(n >= 0) {
        if(s[n] !== ' ') break;
        --n;
    }

    //count the last word length
    while(n >= 0) {
        if(s[n] === ' ') break;
        --n;
        count++;
    }
    return count;
}

function lengthOfLastWord3(s) {
    let n = s.length - 1;
    let count = 0;

    while(n >= 0) {
        if(s[n] !== ' ') count++;
        else if(count > 0 && s[n] === ' ') break;
        --n;
    }
    return count;
}

function firstUniqChar (s) {
    let arr = new Array(26).fill(0);
        for(let i = 0; i < s.length; i++) {
            const charValue = s.charCodeAt(i) - 97;
            arr[charValue]++;
        }
        
        for(let i = 0; i < s.length; i++) {
            const index = s.charCodeAt(i) - 97
            if(arr[index] === 1) {
                return i;
            }
        }
        return -1;
}
// console.log(lengthOfLastWord(str));
// console.log(lengthOfLastWord1(str));
// console.log(lengthOfLastWord2(str));
console.log(firstUniqChar(str));

