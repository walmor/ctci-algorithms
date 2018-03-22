const yallist = require('yallist');

yallist.prototype.toString = function() {
  return JSON.stringify(this.toArray());
};

function linkedListFromString(input) {
  const values = Array.from(input);
  return yallist.create(values);
}

function singlyLinkedList(input) {
  const sll = linkedListFromString(input);

  let node = sll.head;

  while (node) {
    delete node.prev;
    node = node.next;
  }

  return sll;
}

module.exports = {
  linkedListFromString,
  singlyLinkedList
};
