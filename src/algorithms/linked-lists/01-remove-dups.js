const yallist = require('yallist');

function removeDuplicates(linkedList) {
  if (!linkedList) {
    return linkedList;
  }

  const hashtable = {};
  let node = linkedList.head;

  while (node) {
    if (hashtable[node.value]) {
      if (node.prev) {
        node.prev.next = node.next;
      } else {
        linkedList.head = node.next;
      }

      if (node.next) {
        node.next.prev = node.prev;
      } else {
        linkedList.tail = node.prev;
      }

      linkedList.length--;
    } else {
      hashtable[node.value] = true;
    }
    node = node.next;
  }

  return linkedList;
}

module.exports = removeDuplicates;
