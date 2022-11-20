// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

/*
Hashmap: Keep track of every instance of each character
Var: max
Loop (forms a window):
  add the char to the hashmap (if it is in hashmap, increment)
  if occurrence of a char > K:
    slide window
  update length to max
return the max

'araaci'
{}
Iteration 1: {'a': 1}
Iteration 2: {'a': 1, 'r': 1}
Iteration 3: {'a': 2, 'r': 1}
Iteration 4: {'a': 3, 'r': 1}
Iteration 5: {'a': 3, 'r': 1, 'c': 1}
Iteration 6: {'a': 3, 'r': 1, 'c': 1, 'i': 1}
*/

function longest_substring_with_k_distinct(str, k) {
  // TODO: Write code here
  let max = 0;
  const charMap = {};

  let leftPtr = 0;
  for (let rightPtr = 0; rightPtr < str.length; rightPtr++) {
    const currentChar = charMap[str[rightPtr]];

    if (currentChar >= 0) {
      charMap[str[rightPtr]]++;
    } else {
      charMap[str[rightPtr]] = 1;
    }

    while (charMap[str[rightPtr]] > k) {
      const leftChar = str[leftPtr];
      charMap[leftChar]--;
      leftPtr++;
    }

    max = Math.max(max, rightPtr - leftPtr + 1);
  }

  return max;
}
