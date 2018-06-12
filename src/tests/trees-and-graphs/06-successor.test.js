const getSuccessor = require('../../algorithms/trees-and-graphs/06-successor');

describe('06. Find the "next" node (i.e., in-order successor)', () => {
  const tests = [tc1(), tc2(), tc3()];

  runInOutTestCases(getSuccessor, tests);
});

function tc1() {
  const root = getSimpleBinaryTree();
  return getTc(root.left, root);
}

function tc2() {
  const root = getSimpleBinaryTree();
  return getTc(root, root.right);
}

function tc3() {
  const root = getSimpleBinaryTree();
  return getTc(root.right, null);
}

function getTc(current, next) {
  return tc([current], next);
}

function getSimpleBinaryTree() {
  const root = {
    left: {
      value: 'l'
    },
    right: {
      value: 'r'
    }
  };

  root.left.parent = root;
  root.right.parent = root;

  return root;
}
