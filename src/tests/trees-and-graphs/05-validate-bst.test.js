const validateBST = require('../../algorithms/trees-and-graphs/05-validate-bst');

describe('05. Check if a binary search tree is valid', () => {
  const tests = [tc1(), tc2(), tc3(), tc4()];

  runInOutTestCases(validateBST, tests);
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
      value: 4
    },
    right: {
      value: 5
    }
  };

  return tc([tree], false);
}

function tc3() {
  const tree = {
    value: 3,
    left: {
      value: 2
    },
    right: {
      value: 1
    }
  };

  return tc([tree], false);
}

function tc4() {
  const tree = {
    value: 3,
    left: {
      value: 1,
      left: {
        value: 0
      },
      right: {
        value: 2
      }
    },
    right: {
      value: 5,
      left: {
        value: 4
      },
      right: {
        value: 6
      }
    }
  };

  return tc([tree], true);
}
