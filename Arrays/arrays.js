function findElement(arr, ele) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == ele) return i;
    }
    return -1;
}

function largestInArray(arr) {
    let largest = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log(largest);
}

function findSecondLargest(arr) {
    if(arr.length < 2) return -1; // Check what we need to return for edge cases like this

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    console.log(secondLargest);
}

function removeDuplicate(arr) {
    let pos = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== arr[pos]) {
            pos++;
            arr[pos] = arr[i];
        }
    }
    return {arr, pos: pos+1};
}

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    // O(n^2)
    // while(k-- > 0) {
    //     let lastEle = arr[n-1];
    // for(let i = n-2; i >= 0; i--) {
    //     arr[i+1] = arr[i];
    // }
    // arr[0] = lastEle
    // }
//O(3N)
    reverseArray(arr, n-k, n-1);
    reverseArray(arr, 0, n-k-1);
    reverseArray(arr, 0, n-1);
    console.log(arr);

}
function reverseArray(arr, start, end) {
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--
    }
}



rotateArray([1,2,3,4,5,6,7], 122)
// console.log(removeDuplicate([0, 0, 1, 1, 2, 2, 3, 3, 4, 4]));
// findSecondLargest([55, 21, 56, 110, 33, 67, -110])
// largestInArray([55, 21, 56, 110, 33, 67, -111])
// console.log(findElement([55, 21, 56, 110, 33, 67], 110));
// console.log(findElement([55, 21, 56, 110, 33, 67], 11));
