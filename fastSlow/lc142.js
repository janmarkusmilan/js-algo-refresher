// Problem Statement #

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

/*
Tortoise and Hare Algorithm:
  P1 where it moves 1 step
  P2 where it moves 2 steps

  P3 = Hare or Tortoise 
  P4 = Head node

  Loop until they reach the same node
  Return one of the pointers at the end
  Return head
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function (head) {
  // TODO: Write your code here
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
