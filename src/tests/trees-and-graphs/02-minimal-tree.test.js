const createMinimalTree = require('../../algorithms/trees-and-graphs/02-minimal-tree');

describe('02. Create a binary search tree with minimal height', () => {
  const tests = [tc1(), tc2(), tc3()];

  runInOutTestCases(createMinimalTree, tests);
});

function tc1() {
  const array = [0, 1, 2, 3, 4];

  const tree = {
    value: 2,
    left: {
      value: 1,
      left: {
        value: 0,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: 4,
      right: null,
      left: {
        value: 3,
        left: null,
        right: null
      }
    }
  };

  return tc([array], tree);
}

function tc2() {
  const array = [0, 1, 2, 3, 4, 5];

  const tree = {
    value: 3,
    left: {
      value: 1,
      left: {
        value: 0,
        left: null,
        right: null
      },
      right: {
        value: 2,
        left: null,
        right: null
      }
    },
    right: {
      value: 5,
      right: null,
      left: {
        value: 4,
        left: null,
        right: null
      }
    }
  };

  return tc([array], tree);
}

function tc3() {
  const array = [0];

  const tree = {
    value: 0,
    left: null,
    right: null
  };

  return tc([array], tree);
}
