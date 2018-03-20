const yallist = require('yallist');

function getKthToLast(linkedList, kth) {
  if (
    kth === undefined ||
    kth === null ||
    kth < 0 ||
    kth >= linkedList.length
  ) {
    return null;
  }

  let arr = [];
  let node = linkedList.head;

  while (node) {
    arr.push(node.value);
    node = node.next;
  }

  return arr[arr.length - kth - 1];
}

module.exports = getKthToLast;
