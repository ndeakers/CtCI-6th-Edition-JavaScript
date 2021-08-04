const LinkedList = require("../util/LinkedListX");
const Node = require("../util/LinkedListX");
/**
 * remove Duplicates from an unsorted linked list
 * 
 */



function removeDuplicates(list) {
  if (list.head === null) return undefined;
  let seen = new Set();
  let current = list.head;
  let previous = null;

  while (current !== null) {

    if (seen.has(current.value)) {
      previous.next = current.next;
    } else {
      seen.add(current.value);
      previous = current;
    }
    current = current.next;
  }
  return list;
}

// quick test
let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.append(elem);
}

removeDuplicates(list);

console.log(list._toArray()); // [1, 5, 6, 8]