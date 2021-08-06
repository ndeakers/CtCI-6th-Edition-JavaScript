var LinkedList = require('./../util/LinkedList');

/**
 * Given a linked list which may contain a loop. implement an algo that 
 * returns the node at the beginning of the loop (if one exists)
 * A -> B -> C -> D -> E -> C
 */

function loopDetection(head) {
  if (head === null) return undefined;
  let seen = new Set();
  let current = head;
  while (current !== null) {
    if (seen.has(current)) {
      return current;
    } else {
      seen.add(current);
    }
    current = current.next;
  }
  return false;
}

/* TEST */
// A -> B -> C -> D -> E -> C

var a = new LinkedList();
var b = new LinkedList();
var c = new LinkedList();
var d = new LinkedList();
var e = new LinkedList();
var f = new LinkedList();

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = c;

console.log(loopDetection(a) === c, true);

var A = new LinkedList();
var B = new LinkedList();
var C = new LinkedList();
var D = new LinkedList();
var E = new LinkedList();
var F = new LinkedList();

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

console.log(loopDetection(A) === null, false);
