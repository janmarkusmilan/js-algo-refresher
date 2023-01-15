// Problem Statement #

// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times.
// Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

/*
Question analysis:
  1. Positive numbers in our array
  2. Only one duplicate value (repeatable)
  3. No extra space (don't create any extra scaling data structures)
  4. The value of each number will be limited to the length of the array
  5. You can modify the input array
  6. Unsorted
  7. Values are from 1 to n

Edge cases:
  1. If no duplicate: return -1
  2. If empty array: return -1
*/

const find_duplicate = function (nums) {
  // TODO: Write your code here
};

console.log(find_duplicate([1, 4, 4, 3, 2])); // 4
console.log(find_duplicate([2, 1, 3, 3, 5, 4])); // 3
console.log(find_duplicate([2, 4, 1, 4, 4])); // 4
