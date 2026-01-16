Bubble sort
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

selection sort
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

insertion sort
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
3.merge the sorted array



