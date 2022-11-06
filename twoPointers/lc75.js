// Problem Statement #

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

const dutch_flag_sort = function (arr) {
  // TODO: Write your code here
  let leftPtr = 0;
  let rightPtr = arr.length - 1;

  let i = 0;
  while (i <= rightPtr) {
    if (arr[i] === 0) {
      const temp = arr[i];
      arr[i] = arr[leftPtr];
      arr[leftPtr] = temp;

      leftPtr++;
      i++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      const temp2 = arr[i];
      arr[i] = arr[rightPtr];
      arr[rightPtr] = temp2;

      rightPtr--;
    }
  }
};
