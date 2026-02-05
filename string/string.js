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

function removeParentheses(str) {
    let result = '';
    let level = 0;

    for(let char of str) {
        if(char === '(') {
            if(level > 0) result += char;
            level++;
        } else if(char === ')') {
            level--;
            if(level > 0) result += char;
        }
    }
    return result;
}

function jewelStone(jew, stn) {
    let count = 0;
    for(let i = 0; i < stn.length; i++) {
        for(let j = 0; j < jew.length; j++) {
            if(stn[i] === jew[j]) {
                 count++;
                 break;
            }
        }
    }
    return count;
}

function jewelStone2(jew, stn) {
    let count = 0;
    let jewSet = new Set();
    for(let i = 0; i < jew.length; i++) {
        jewSet.add(jew[i]);
    }

    for(let i = 0; i < stn.length; i++) {
        if(jewSet.has(stn[i])) count++;
    }

    return count;
}

function commonPrefix(arr) {
    let x = 0;

    while(x < arr[0].length) {
        let char = arr[0][x];

        for(let i = 1; i < arr.length; i++) {
            if(char !== arr[i][x] || x === arr[i].length) {
                return arr[0].substring(0, x);
            }
        }
        x++;
    }

    return arr[0];
}

function isIsomorphic(s1, s2) {
    if(s1.length !== s2.length) return false;
    let s1Tos2Map = {};
    let s2Tos1Map = {};

    for(let i = 0; i < s1.length; i++) {
        if(!s1Tos2Map[s1[i]] && !s2Tos1Map[s2[i]]) {
            s1Tos2Map[s1[i]] = s2[i];
            s2Tos1Map[s2[i]] = s1[i];
        } else if(s2Tos1Map[s2[i]] !== s1[i] || s1Tos2Map[s1[i]] !== s2[i]) {
            return false;
        }
    }
    return true;
}

console.log(isIsomorphic('bar', 'foo'));



// console.log(commonPrefix(['flower', 'floair', 'floame']));

// console.log(jewelStone('aA', 'aAaaBbbB'));
// console.log(jewelStone2('aA', 'aAaaBbbB'));

// console.log(removeParentheses('(()())'));
// console.log(lengthOfLastWord(str));
// console.log(lengthOfLastWord1(str));
// console.log(lengthOfLastWord2(str));
// console.log(firstUniqChar(str));

