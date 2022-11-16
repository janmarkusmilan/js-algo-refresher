// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

/*
Edge cases: return 0
Variables: min, sum
Form a window (loop):
    increment sum until >= target
    while sum >= target:
        keep track of current minimum
        subtract leftmost
        left++;
    
    if sum does not equal target:
        return 0
        
return the min
*/

function smallest_subarray_with_given_sum(s, arr) {
  // TODO: Write code here
  let sum = 0;
  let min = arr.length + 1;

  let leftPtr = 0;
  for (let rightPtr = 0; rightPtr < arr.length; rightPtr++) {
    sum += arr[rightPtr];

    while (sum >= s) {
      min = Math.min(min, rightPtr - leftPtr + 1);
      sum -= arr[leftPtr];

      leftPtr++;
    }
  }

  if (min === arr.length + 1) {
    return 0;
  }

  return min;
}
