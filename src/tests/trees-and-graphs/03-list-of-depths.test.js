const createListOfDepths = require('../../algorithms/trees-and-graphs/03-list-of-depths');

describe('02. Creates a list of all the nodes at each depth', () => {
  const tests = [tc1(), tc2(), tc3()];

  runInOutTestCases(createListOfDepths, tests);
});

function tc1() {
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
      }
    }
  };

  const list = [[3], [1, 5], [0, 2, 4]];

  return tc([tree], list);
}

function tc2() {
  const tree = {
    value: 3,
    left: {
      value: 1
    },
    right: {
      value: 5
    }
  };

  const list = [[3], [1, 5]];

  return tc([tree], list);
}

function tc3() {
  const tree = {
    value: 1
  };

  const list = [[1]];

  return tc([tree], list);
}
