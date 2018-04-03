const sumLinkedLists = require('../../algorithms/linked-lists/05-sum-lists');
const ll = require('yallist').create;

describe('05. Add two numbers represented by a linked list', () => {
  const tests = [
    tc([ll([7, 1, 6]), ll([5, 9, 2])], ll([2, 1, 9])),
    tc([ll([0, 0, 5]), ll([0, 0, 5])], ll([0, 0, 0, 1])),
    tc([ll([0, 1]), ll([0, 0, 1])], ll([0, 1, 1])),
    tc([ll([9, 9]), ll([9, 9, 9])], ll([8, 9, 0, 1])),
    tc([ll([1]), ll([1])], ll([2])),
    tc([ll([6]), ll([6])], ll([2, 1]))
  ];

  runInOutTestCases(sumLinkedLists, tests);
});
