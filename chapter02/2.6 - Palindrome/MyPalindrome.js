var LinkedList = require('./../util/LinkedList');

function isPalindrome(head) {
  let current = head;
  let newHead = null;
  while (current !== null) {
    let node = new LinkedList(current.value);
    node.next = newHead;
    newHead = node;
    current = current.next

  }
  return isEqual(head, newHead);

}

function isEqual(one, two) {
  while (one !== null && two !== null) {
    if (one.value !== two.value) {
      return false;
    }
    one = one.next;
    two = two.next;
  }
  return true;
}
/* TEST */

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('c');
var f = new LinkedList('b');
var g = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(isPalindrome(a));