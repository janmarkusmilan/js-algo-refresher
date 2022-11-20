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
*/

function longest_substring_with_k_distinct(str, k) {
  // TODO: Write code here
}
