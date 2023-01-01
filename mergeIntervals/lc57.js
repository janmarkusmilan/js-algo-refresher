// Problem Statement #

// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const insert = function (intervals, new_interval) {
  let merged = [];
  // TODO: Write your code here
  return merged;
};

process.stdout.write("Intervals after inserting the new interval: ");
let result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals after inserting the new interval: ");
result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 10)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals after inserting the new interval: ");
result = insert([new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
