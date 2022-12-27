// Problem Statement #

// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

/*
[[6, 7], [2, 4], [5, 9]]
Sort: [[2, 4], [5, 9], [6, 7]]

Vars:
  res array (put our result)
  ptr1: arr[0][0] = 2
  ptr2: arr[0][1] = 4

Loop through the rest of the intervals
Have a comparison:
  If it is overlapping: update one of our ptrs and to res (get the lowest and greatest values between the two intervals)
  If it is not overlapping: push the first arr into res and update the two pointers to the next interval in the array

ptr1: arr[1][0] = 5
ptr2: arr[1][1] = 9

The end, the res array should have our merged intervals
*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

const merge = function (intervals) {
  // TODO: Write your code here
};

merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(5, 9),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 6),
  new Interval(3, 5),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([new Interval(1, 4), new Interval(1, 4)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);
