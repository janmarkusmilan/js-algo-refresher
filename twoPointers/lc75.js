// Problem Statement #

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

/*
Sort the array in place (don't use the .sort function)
If it is sorted or edge case: return the array (do nothing)

Two pointers (beginning and end of array)
Loop through the array
If statement for 0, 1 and 2
Keep all the 0s to the left side of the array
Keep all the 2s to the right side of the array
Swap two elements (define temp variable, set the array element equal to the next array element, set the next array element to the temp)
No return value

[2, 1, 1, 0, 1]
-> [1, 1, 1, 0, 2]
-> [0, 1, 1, 1, 2]
*/

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

let arr = [1, 0, 2, 1, 0];
dutch_flag_sort(arr);
console.log(arr);

arr = [2, 2, 0, 1, 2, 0];
dutch_flag_sort(arr);
console.log(arr);
