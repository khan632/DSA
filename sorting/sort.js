const arr = [1, 13, -12, 22, 3, 21, -3, 34];

/*
s1: start a loop for turn this will count how many time you compare each element 
s2: second loop in each turn this loop will compare every element to each other except last one
s3: swap if you found curr is greater than the next one
*/

function bubbleSort(arr) {
  for (let turn = 1; turn < arr.length; turn++) {
    for (let i = 0; i < arr.length - turn; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
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

function mergeSort(nums) {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let left = mergeSort(nums.slice(0, mid));
  let right = mergeSort(nums.slice(mid));

  return mergeTwoSortedArray(left, right);
}

function mergeTwoSortedArray(left, right) {
  let ansArr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      ansArr.push(left[i]);
      i++;
    } else {
      ansArr.push(right[j]);
      j++;
    }
  }
  return [...ansArr, ...left.slice(i), ...right.slice(j)];
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1]; // take pivot as last index here you can take any index as last index
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log(bubbleSort(arr));
// console.log(selectionSort(arr));
// console.log(inserionSort(arr));
// console.log(mergeSort(arr));
console.log(quickSort(arr));

