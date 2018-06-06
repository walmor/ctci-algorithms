function createMinimalTree(array) {
  const tree = createNode(array);

  //console.log(tree);

  return tree;
}

function createNode(array) {
  if (!array || !array.length) {
    return null;
  }

  const idx = Math.floor(array.length / 2);

  const node = {
    value: array[idx],
    left: createNode(array.slice(0, idx)),
    right: createNode(array.slice(idx + 1))
  };

  return node;
}

module.exports = createMinimalTree;
