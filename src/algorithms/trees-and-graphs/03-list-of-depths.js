function createListOfDepths(root) {
  const list = [];
  pushToList(root, list, 0);
  return list;
}

function pushToList(node, list, depth) {
  if (!node) {
    return;
  }

  if (depth >= list.length) {
    list.push([]);
  }

  list[depth].push(node.value);

  pushToList(node.left, list, depth + 1);
  pushToList(node.right, list, depth + 1);
}

module.exports = createListOfDepths;
