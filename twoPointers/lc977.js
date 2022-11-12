// Problem Statement #
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

/*
First Thoughts (Brute Force):
  - Loop through the array
  - Square the input after each iteration (if we create a new array, then just insert the new values into the new array)
  - Sort from least to greatest

Second Thoughts (Two Pointer):
  - Make an array and fill with some arbitrary number
  - Define two pointers at beginning and end
  - Get the square at each value the pointers are on
  - On some condition, we pick the most suitable square and insert into the array
*/

// Brute Force Solution
// -----
// function make_squares(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
//   }
//   arr.sort((a, b) => a - b);
//   return arr;
// }

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

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);
console.log(`Squares: ${make_squares([-4, -1, 0, 3, 10])}`);
