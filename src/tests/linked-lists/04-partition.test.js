const partitionLinkedList = require('../../algorithms/linked-lists/04-partition');
const yallist = require('yallist');

describe('04. Partition a linked list around a value x', () => {
  const tests = [
    tc([ll([3, 5, 8, 5, 10, 2, 1]), 5], ll([3, 2, 1, 5, 8, 5, 10])),
    tc([ll([5, 1, 1, 5, 7, 3]), 3], ll([1, 1, 5, 5, 7, 3])),
    tc([ll([1, 2, 3, 4, 5]), 1], ll([1, 2, 3, 4, 5])),
    tc([ll([5, 6, 7, 4, 1, 2, 3]), 4], ll([1, 2, 3, 5, 6, 7, 4])),
    tc([ll([3, 3, 3, 3, 1, 1, 1]), 2], ll([1, 1, 1, 3, 3, 3, 3]))
  ];

  runInOutTestCases(partitionLinkedList, tests);
});

function ll(numbers) {
  return yallist.create(numbers);
}
