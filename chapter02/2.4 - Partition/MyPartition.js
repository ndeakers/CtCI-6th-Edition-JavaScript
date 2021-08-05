var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

function partition(head, partition) {
  let beforeStart = null
  let beforeEnd = null
  let afterStart = null
  let afterEnd = null

  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = null;
    if (current.val < partition) {
      if (beforeStart === null) {
        beforeStart = current;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = current;
        beforeEnd = current;
      }
    } else {
      if (afterStart === null) {
        afterStart = current;
        afterEnd = afterStart;
      } else {
        afterEnd.next = current;
        afterEnd = current;
      }
    }
    current = next;
  }
  if (beforeStart === null) {
    return afterStart;
  }
  beforeEnd.next = afterStart;
  return beforeStart;
}

/* TESTS */
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 2 -> 1 -> 5 -> 5 -> 8 -> 10

var printList = function (a) {
  while (a !== null) {
    console.log(a.value);
    a = a.next;
  }
};

var a = new LinkedList(3);
var b = new LinkedList(5);
var c = new LinkedList(8);
var d = new LinkedList(5);
var e = new LinkedList(10);
var f = new LinkedList(2);
var g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

var newa = partition(a, 5);
console.log("olda", printList(a));
console.log("newa", printList(newa));
