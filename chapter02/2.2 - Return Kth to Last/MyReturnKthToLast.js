const LinkedList = require("../util/LinkedListX");

function findKthToLast(k, list) {
  let runner = list.head;
  let trailer = list.head;

  for (let i = 0; i < k; i++) {
    if (runner === null) return null; // k larger than ll
    runner = runner.next;
  }
  while (runner !== null) {
    trailer = trailer.next;
    runner = runner.next;
  }
  return trailer;
}

/* TESTS */
let l = new LinkedList();
l.append(1)
l.append(2)
l.append(3)
l.append(4)
l.append(5)



console.log(findKthToLast(3, l));

console.log(findKthToLast(10, l));

console.log(findKthToLast(-1, l));

console.log(findKthToLast(0, l));

console.log(findKthToLast(1, l));