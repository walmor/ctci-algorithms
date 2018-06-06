function isBinaryTreeBalanced(root) {
  const { balanced } = isNodeBalanced(root);
  return balanced;
}

function isNodeBalanced(node) {
  if (!node) {
    return { balanced: true, height: -1 };
  }

  const left = isNodeBalanced(node.left);
  if (!left.balanced) return { balanced: false };

  const right = isNodeBalanced(node.right);
  if (!right.balanced) return { balanced: false };

  if (Math.abs(left.height - right.height) > 1) {
    return { balanced: false };
  }

  return {
    balanced: true,
    height: Math.max(left.height, right.height) + 1
  };
}

module.exports = isBinaryTreeBalanced;
