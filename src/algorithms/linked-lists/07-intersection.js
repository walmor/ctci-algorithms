const ll = require('yallist').create;

function getIntersection(list1, list2) {
  const maxSize = Math.max(list1.length, list2.length);
  const list1StartIndex = maxSize - list2.length;
  const list2StartIndex = maxSize - list1.length;

  let list1Node = getNodeAt(list1, list1StartIndex);
  let list2Node = getNodeAt(list2, list2StartIndex);

  while (list1Node && list2Node) {
    if (list1Node === list2Node) {
      break;
    }

    list1Node = list1Node.next;
    list2Node = list2Node.next;
  }

  const intersection = [];

  while (list1Node) {
    intersection.push(list1Node.value);
    list1Node = list1Node.next;
  }

  return intersection;
}

function getNodeAt(list, index) {
  let node = list.head;

  for (let i = 0; i < index; i++) {
    node = node.next;
  }

  return node;
}

module.exports = getIntersection;
