const yallist = require('yallist');

function removeNode(nodeToBeRemoved) {
  if (nodeToBeRemoved.next) {
    next = nodeToBeRemoved.next;
    nodeToBeRemoved.value = next.value;
    nodeToBeRemoved.next = next.next;
  }
}

module.exports = removeNode;
