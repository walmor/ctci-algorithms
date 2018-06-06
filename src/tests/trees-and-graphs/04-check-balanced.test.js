const isBinaryTreeBalanced = require('../../algorithms/trees-and-graphs/04-check-balanced');

describe('04. Check if a binary tree is balanced', () => {
  const tests = [tc1(), tc2(), tc3()];

  runInOutTestCases(isBinaryTreeBalanced, tests);
});

function tc1() {
  const tree = {
    value: 3,
    left: {
      value: 1
    },
    right: {
      value: 5
    }
  };

  return tc([tree], true);
}

function tc2() {
  const tree = {
    value: 3,
    left: {
      value: 1,
      left: {
        value: 6
      },
      right: {
        value: 4
      }
    },
    right: {
      value: 5
    }
  };

  return tc([tree], true);
}

function tc3() {
  const tree = {
    value: 3,
    left: {
      value: 1,
      left: {
        value: 6,
        left: {
          value: 4
        }
      }
    },
    right: {
      value: 5
    }
  };

  return tc([tree], false);
}
