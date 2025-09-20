const heading = document.getElementById('heading');
// check pattern question in pattern.md file

function pattern1(n) {
    for(let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j < n; j++) {
            row += "*";
            if (j < n - 1) row += " ";
        }
        console.log(row);
    }
}


function pattern2(n) {
    for(let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j < i+1; j++) {
            row = row + "* ";
        }
        console.log(row);
        
    }
}

function pattern3(n) {
    for(let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j < i+1; j++) {
            row = row + (j+1) + " ";
        }
        console.log(row);
    }
}

function pattern4(n) {
    for(let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j < (n-i); j++) {
            row = row + (j + 1) + " ";
        }
        console.log(row);
        
    }
}

function pattern5(n) {
    for(let i = 0; i < n; i++) {
        let row = "";
         for(let space = 0; space < n-i+1; space++) {
            row = row + " ";
         }
         for(let star = 0; star < i + 1; star++) {
            row = row + "*";
         }
        console.log(row);
    }
}

function pattern6(n) {
    for(let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j < i+1; j++) {
            if(j % 2 === 0) {
                row = row + "1" + " ";
            }else {
                row = row + "0" + " ";
            }
        }
        console.log(row);
    }
}

// pattern6(6)
// pattern5(5);
// pattern4(6);
// pattern3(5);
// pattern2(5);
// pattern1(5);