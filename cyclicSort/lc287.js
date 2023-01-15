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

Approaching the problem:
  1. Sort the array using cyclic sort (each number will match it's index: index 0 -> 1, index 1 -> 2, ...)
  2. When I do the cyclic sort, once I hit a duplicate number, I can just return that duplicate number
  3. In traditional cyclic sort, once you hit a duplicate number, skip it <-- modify this one part to fit our question

Cyclic Sort pseudo-code:
  1. startIdx = 0
  2. Loop until the startIdx reaches the end of our array
      3. Have a condition that checks if the values don't match the index
        4. If it doesn't match, then we initialize a swapIdx = array[startIdx] - 1
        5. Condition to check for duplicates
            6. If it is not a duplicate value, we swap using destructuring
            7. If it is a duplicate value, return the duplicate value (originally increment startIdx by 1)
        8. If it does match, increment startIdx by 1
  9. Return -1 if we can't find our answer
*/

const find_duplicate = function (nums) {
  // TODO: Write your code here
  let startIdx = 0;
  while (startIdx < nums.length) {
    if (nums[startIdx] !== startIdx + 1) {
      const swapIdx = nums[startIdx] - 1;
      if (nums[startIdx] !== nums[swapIdx]) {
        [nums[startIdx], nums[swapIdx]] = [nums[swapIdx], nums[startIdx]];
      } else {
        return nums[startIdx];
      }
    } else {
      startIdx++;
    }
  }

  return -1;
};

console.log(find_duplicate([1, 4, 4, 3, 2])); // 4
console.log(find_duplicate([2, 1, 3, 3, 5, 4])); // 3
console.log(find_duplicate([2, 4, 1, 4, 4])); // 4
