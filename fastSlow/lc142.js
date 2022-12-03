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

/*
// Brute Force Solution using Sets (Time: O(n), Space: O(n))
  let currentNode = head;
  const seenNodes = new Set(); // The .has() method is O(1)

  // Loop until the current node has already been stored in the set
  while (!seenNodes.has(currentNode)) {
    if (currentNode === null || currentNode.next === null ) {
      return null; // There is a tail, so no cycle
    }
    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }
  return currentNode;
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function (head) {
  // TODO: Write your code here
  if (!head) {
    return head;
  }

  // Use Floyd's Tortoise & Hare Algorithm to check if we have a cycle
  let tortoise = head;
  let hare = head;

  // Keep looping until we find one of our two cases
  while (true) {
    tortoise = tortoise.next;
    hare = hare.next;

    if (hare === null || hare.next === null) {
      return null; // No cycle
    } else {
      hare = hare.next; // Increment hare by one more step (hare moves at 2)
    }

    // If they are pointing at the same list node
    if (tortoise === hare) {
      break;
    }
  }

  // Instantiate two pointers that will traverse the cycle to find the list node that starts the cycle
  // This is also a magical math property
  let ptr1 = head;
  let ptr2 = tortoise;

  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr1;
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
