// Problem Statement #
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

function make_squares(arr) {
  // TODO: Write code here
  let res = Array(arr).fill(Infinity);
  let index = arr.length - 1;

  let leftPtr = 0;
  let rightPtr = arr.length - 1;
  while (leftPtr <= rightPtr) {
    let leftVal = arr[leftPtr] * arr[leftPtr];
    let rightVal = arr[rightPtr] * arr[rightPtr];

    if (leftVal <= rightVal) {
      res[index] = rightVal;
      rightPtr--;
    } else {
      res[index] = leftVal;
      leftPtr++;
    }

    index--;
  }

  return res;
}
