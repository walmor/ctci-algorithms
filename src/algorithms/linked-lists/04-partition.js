function partitionLinkedList(linkedList, partition) {
  let node = linkedList.head;

  for (let i = 0; i < linkedList.length; i++) {
    let next = node.next;

    if (node.value >= partition) {
      linkedList.pushNode(node);
    }

    node = next;
  }

  return linkedList;
}

module.exports = partitionLinkedList;
