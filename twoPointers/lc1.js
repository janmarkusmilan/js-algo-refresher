// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

function pair_with_target_sum(arr, targetSum) {
  // TODO: Write code here
  const numsMap = {};
  for (let p = 0; p < arr.length; p++) {
    const currentMapVal = numsMap[arr[p]];

    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = targetSum - arr[p];
      numsMap[numberToFind] = p;
    }
  }

  return null;
}
