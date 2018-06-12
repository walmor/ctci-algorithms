function getSuccessor(node) {
  if (!node.right) {
    return getSucParent(node);
  }

  let next = node.right;

  while (next.left) {
    next = next.left;
  }

  return next;
}

function getSucParent(node) {
  if (!node.parent) {
    return null;
  }

  if (node.parent.left === node) {
    return node.parent;
  }

  return getSucParent(node.parent);
}

module.exports = getSuccessor;
