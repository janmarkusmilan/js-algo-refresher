// Problem Statement #

// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const can_attend_all_appointments = function (intervals) {
  // TODO: Write your code here
};
