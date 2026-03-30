//1. basic binary search algo
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let mid = Math.floor(left + right / 2);

        if(target === arr[mid]) {
            return mid;
        } else if(arr[mid] > target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// 2. Lower Bound
function lowerBound(arr, target) {
    let ans = -1;
    let low = 0;
    let high = arr.length -1

    while(low <= high) {
        let mid = Math.floor((low+high)/2);
        if(arr[mid] >= target) { // lower bound
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
    
}

// 3. upper bound 
function lowerBound(arr, target) {
    let ans = -1;
    let low = 0;
    let high = arr.length -1

    while(low <= high) {
        let mid = Math.floor((low+high)/2);
        if(arr[mid] > target) { // upper bound
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

//4. floor and ceil in a sorted array
function findCeil(arr, x) {
        let low = 0, high = arr.length - 1;
        let ans = -1;

        while(low <= high) {
            let mid = Math.floor((high + low) / 2);
            if(arr[mid] >= x) {
                ans = arr[mid];
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
    function findFloor(arr, x) {
        let low = 0, high = arr.length - 1;
        let ans = -1;

        while(low <= high) {
            let mid = Math.floor((high + low) / 2);
            if(arr[mid] <= x) {
                ans = arr[mid];
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }
function floorNCeil(arr, target) {
    let ceil = findCeil(arr, target);
    let floor = findFloor(arr, target);
    return [floor, ceil]
}


function searchRotatedArray(arr, target, duplicate = false) {
    let low = 0, high = arr.length - 1;
    while(low <= high) {
        let mid = Math.floor((high + low) / 2);

        if(arr[mid] === target) {
            return mid;
        }
        if(duplicate && arr[low] === arr[mid] && arr[mid] === arr[high]) {
            low = low+1;
            high = high-1;
        }
        // find the sorted part left side or right side 
        else if(arr[low] <= arr[mid]) {
            //check which value can be present.
            if(target <= arr[mid] && target >= arr[low]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if(target >= arr[mid] && target <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}

function rotatedArraySearch(arr, target) {
    return searchRotatedArray(arr, target, false);
}

function rotatedArraySearchDuplicate(arr, target) {
    return searchRotatedArray(arr, target, true);
}

function findMinimum(arr) {
    let low = 0, high = arr.length - 1
    let min = Infinity;
    while(low <= high) {
        let mid = Math.floor((high + low) / 2);
        if(arr[low] <= arr[mid]) {
            min = Math.min(arr[low], min);
            low = mid + 1;
        } else {
            min = Math.min(arr[mid], min);
            high = mid - 1;
        }
    }
    return min;
}




// console.log(findMinimum([7,8,9,1,2,3,4,5,6]));
// console.log(searchRotatedArray([7,8,9,1,2,3,4,5,6], 8));
// console.log(searchRotatedArray([7,8,9,1,2,3,4,5,6], 0));
// console.log(floorNCeil([3, 4, 4, 7, 8, 10], 15));
// console.log(lowerBound([1,2,3,3,3,7,8,9,9,11], 11));
// console.log(binarySearch([1,23,45,88,100,344], 45));
// console.log(binarySearch([1,23,45,88,100,344], 445));
