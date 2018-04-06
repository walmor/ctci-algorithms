const ll = require('yallist').create;

function hasLoop(list) {
  const map = new Map();
  let node = list.head;

  while (node) {
    if (map.has(node)) return true;

    map.set(node, 1);

    node = node.next;
  }

  return false;
}

module.exports = hasLoop;
