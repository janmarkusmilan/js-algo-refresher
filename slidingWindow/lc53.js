// Problem Statement #

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

function max_subarray_size_k(k, arr) {
  // TODO: Write your code here
  let max = 0;
  let sum = 0;

  let leftPtr = 0;
  for (let rightPtr = 0; rightPtr < arr.length; rightPtr++) {
    sum += arr[rightPtr];

    if (rightPtr >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[leftPtr];
      leftPtr++;
    }
  }

  return max;
}
