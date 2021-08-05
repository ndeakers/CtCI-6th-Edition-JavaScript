const LinkedList = require("../util/LinkedListX");
const printList = require("../util/printList");
/**
 * Given the node to be deleted, remove that node from the
 * linked list. It can't be the head or the tail
 */
function deleteMidNode(node) {
  // this does not work if the node is the tail
  // copy the data from the next node over to the current node,
  // then delete the next node 
  if (node !== null && node.next !== null) {
    node.value = node.next.value;
    node.next = node.next.next;
  }
}

/* TEST */

let list = new LinkedList();
for (let item of [1, 2, 3, 4, 5, 6]) {
  list.append(item);
}

printList(list.head);
deleteMidNode(list.head.next);
console.log("********");
printList(list.head);
