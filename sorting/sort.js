const arr = [1,13,-12,22,3,21,-3,34];

/*
s1: start a loop for turn this will count how many time you compare each element 
s2: second loop in each turn this loop will compare every element to each other except last one
s3: swap if you found curr is greater than the next one
*/

function bubbleSort(arr) {
    for(let turn = 1; turn < arr.length; turn++) {
        for(let i = 0; i < arr.length-turn; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}

/*
s1. i loop will iterate from 0 to second last index because last index will automatically sorted
s2: assume current i as minimum
s3: j loop will from next of current ith to the last index and will check every element for samllest
s4. after j loop swap arr[min] to arr[i];

*/
function selectionSort(arr) {
    for(let i = 0; i < arr.length-1; i++) {
        let min = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp
    }
    return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let prevElement = i - 1;

    while (prevElement >= 0 && arr[prevElement] > currentElement) {
      arr[prevElement + 1] = arr[prevElement];
      prevElement--;
    }

    arr[prevElement + 1] = currentElement;
  }
  return arr;
}


function mergeSort(num) {
    
}

// console.log(bubbleSort(arr));
console.log(selectionSort(arr));

