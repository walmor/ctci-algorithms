const Queue = require('../../tests/utilities/queue');

function hasRouteBetween(node1, node2) {
  const queue = new Queue();
  node1.marked = true;
  queue.enqueue(node1);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    const adjacents = node.adjacents || [];

    for (let i = 0; i < adjacents.length; i++) {
      const adj = adjacents[i];

      if (!adj.marked) {
        if (adj === node2) {
          return true;
        }

        adj.marked = true;
        queue.enqueue(adj);
      }
    }
  }

  return false;
}

module.exports = hasRouteBetween;
