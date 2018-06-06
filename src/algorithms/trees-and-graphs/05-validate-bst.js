function validateBST(root) {
  return validateNode(root, null, null);
}

function validateNode(node, min, max) {
  if (!node) {
    return true;
  }

  if ((min && node.value <= min) || (max && node.value > max)) {
    return false;
  }

  if (!validateNode(node.left, min, node.value) || !validateNode(node.right, node.value, max)) {
    return false;
  }

  return true;
}

module.exports = validateBST;
