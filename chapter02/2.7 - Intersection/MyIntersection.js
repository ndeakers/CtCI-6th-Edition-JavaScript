var LinkedList = require('./../util/LinkedList');

function intersection(head1, head2) {
  let ll1Set = new Set();

  let current = head1;
  while (current !== null) {
    if (!ll1Set.has(current)) {
      ll1Set.add(current);
    }
    current = current.next;
  }
  let current2 = head2;

  while (current2 !== null) {
    if (ll1Set.has(current2)) {
      return current2;
    }
    current2 = current2.next;
  }
  return false;
}

/* TEST */

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('h');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

var a1 = new LinkedList('a1');
var b1 = new LinkedList('b1');
var c1 = new LinkedList('c1');
var d1 = new LinkedList("d1")

a1.next = b1;
b1.next = c1;
c1.next = d1;

var intersectNode = intersection(a, a1);

console.log(intersectNode.value || intersection(a, a1));