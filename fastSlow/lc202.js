// Problem Statement #

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

/*
Get the digits of each number
Square the digits
Add them together
Loop until we have a repeating number (infinite loop) or we reach 1

Essentials (according to logic above):
  1. Some data structure to add the numbers and check if there is a repeating number
  2. Get the digits of each number (could use the .split method)
  3. Square each number (could use the .map method and then perform the operation)
  4. Add the numbers together (use the .reduce method)
*/

const find_happy_number = function (num) {
  // TODO: Write your code here
  let newNum = num;
  let seenNums = new Set();

  while (!seenNums.has(newNum)) {
    seenNums.add(newNum);
    newNum = newNum
      .toString()
      .split("")
      .map((a) => (a = a * a))
      .reduce((a, b) => a + b, 0);

    if (newNum === 1) {
      return true;
    }
  }

  return false;
};

console.log(`${find_happy_number(23)}`);
console.log(`${find_happy_number(12)}`);
