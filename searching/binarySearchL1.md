1. Binary Search used for searching element in a sorted array, came up as a optimised approach of a linear search.
2. where in linear search we search in as a O(n) complexity in binary search we search in O(logn)
3. basic algo in binary search:
    a. we divide array into half and take that as mid
    b. if target element is lower than arr[mid] than we try to find target  into left side of mid
    c. if not lower than find right side of mid
    d. do this till left if equal or greater than right


Q2: Lower Bound/ upper bound:
lower: find smallest index such that arr[idx] >= target
upper: find smallest index such that arr[idx] > target
approach will always find mid and check if condition of above if find about our answer but not return and than check for other iteration by updating low and high
Algo:
1. assume few variable 
    ans: last element or -1
    low: 0
    high: arr.length-1
2. start loop low > high
3. find mid = low+high/2
4. if it match conditon update ans and check from mid of right
5. else check mid's left
6 outside loop return ans

Q3: Search Insert Position: LC: 35
use lower bound concept find smallest element with condition and that place will be th inserted place

Q4: Floor and ceil in sorted array
Question has two part:
first find ceil value means lower than target value
second find floor value means just greater than target value

algo:
1. take variable as {low: 0, high: arr.length-1, ans: -1};
2. start loop low <= high
3. find mid
4. check:
    ceil ==> if arr[mid] >= tar
        than assume that this is out potential answer but look for actual answer and remove right half and move high to mid -1
         else: retard left half and move low to mid+1

    floor ==> if arr[mid] <= tar
        than assume that its our answer but look for actual answer and retard left half and move low to next to mid
            else: retard right half and move high to next to mid 

Q5: Find in a rotated sorted array:
so the logic if we didn't find target we will look which side sorted from the mid either left side of right. the we will look inside the sorted half which side we can find our value.

Algo:
1. take variable as {low: 0, high: arr.length-1, ans: -1};
2. start loop low <= high
3. find mid
4. check:
    a. if mid === target return mid
    b. check which side is sorted [arr[low] <= arr[mid]]: that means left side is sorted otherwise right side
    c. then check
        c.a: if targeted value is greater than arr[low] and targeted value less than mid than shift high to mid - 1
        c.b: else shift low = mid + 1;
    d. same for right side

Q.5 Find in rotated array when duplicate is there:
same algo as rotated sorted array
just check before finding sorted part wether all points of array {low, mid, high} all are equal or not

Q6: find min in a rotated sorted array:

