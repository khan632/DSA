1. BUBBLE SORT:

comparing every element with each other and applying sorting is the basic fundamental of this alogirthm.

Bubble sort is a basic sorting algorithm that:
1. Repeatedly compares adjacent elements
2. Swaps them if they are in the wrong order
3. Continues until the array is sorted

Larger elements “bubble up” to the end of the array.

For array: [5, 3, 8, 4]
1. Compare 5 & 3 → swap → [3, 5, 8, 4]
2. Compare 5 & 8 → no swap
3. Compare 8 & 4 → swap → [3, 5, 4, 8]
4. Repeat until no swaps are needed

Best case: O(n) (already sorted, with optimization)
Average / Worst case: O(n²)
Space: O(1) (in-place)

2. SELECTION SORT:
Selection sort works by repeatedly selecting the smallest element from the unsorted part and placing it at the beginning.

Array: [64, 25, 12, 22, 11]

1. Find smallest (11) → swap with first
→ [11, 25, 12, 22, 64]

2. Find smallest in remaining → (12)
→ [11, 12, 25, 22, 64]

3. Find smallest → (22)
→ [11, 12, 22, 25, 64]
Done ✔️

| Case    | Complexity |
| ------- | ---------- |
| Best    | `O(n²)`    |
| Average | `O(n²)`    |
| Worst   | `O(n²)`    |
| Space   | `O(1)`     |

ALGO:
/*
s1. i loop will iterate from 0 to second last index because last index will automatically sorted
s2: assume current i as minimum
s3: j loop will from next of current ith to the last index and will check every element for samllest
s4. after j loop swap arr[min] to arr[i];

*/


3. INSERTION SORT
assume first one is sorted and then start comparing all other element with sorted and moving that sorted index value to its own place

Insertion sort works the way you sort playing cards in your hand:

1. Take one element at a time
2. Insert it into its correct position in the already-sorted part

Array: [8, 3, 5, 2]

1. Start with 8 → already sorted
2. Insert 3 → [3, 8, 5, 2]
3. Insert 5 → [3, 5, 8, 2]
4. Insert 2 → [2, 3, 5, 8]

| Case                  | Complexity |
| --------------------- | ---------- |
| Best (already sorted) | `O(n)`     |
| Average               | `O(n²)`    |
| Worst (reverse order) | `O(n²)`    |
| Space                 | `O(1)`     |

merge sort:

Merge sort is a divide-conquer algorithm
1. Divide the array into two equal half
2. Sort each half
3. merge the sorted array

| Case    | Complexity   |
| ------- | ------------ |
| Best    | `O(n log n)` |
| Average | `O(n log n)` |
| Worst   | `O(n log n)` |
| Space   | `O(n)`       |


ALGO:
/*
1. divide array into two equal parts
2. create two new branch on every branch call new branch by dividing them
3. merge both branch array in a sorted manner 
*/

5. QUICK SORT
1. Quick sort is a divide-and-conquer algorithm that:

2. Picks a pivot at any index
3. Partitions the array into elements less than and greater than the pivot
4. Recursively sorts both sides

Array: [8, 3, 1, 7, 0, 10, 2]
Pivot = 2

Left  (<2): [1, 0]
Pivot: 2
Right (>2): [8, 3, 7, 10]

 ALGO:

 /*
1. Take pivot at any index
2. create pivot's left and right side array and sort them sepratly same by finding pivot
*/

| Case    | Time                       |
| ------- | -------------------------- |
| Best    | `O(n log n)`               |
| Average | `O(n log n)`               |
| Worst   | `O(n²)` (bad pivot choice) |

