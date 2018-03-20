const getKthToLast = require('../../algorithms/linked-lists/02-return-kth-to-last');
const yallist = require('yallist');

describe('02. Return the kth to last element of a singly linked list', () => {
  const tests = [
    tc([ll('abcd'), 0], 'd'),
    tc([ll('abcdefg'), 1], 'f'),
    tc([ll('abcdeg'), 5], 'a'),
    tc([ll('x'), 0], 'x'),
    tc([ll('washington'), 3], 'g'),
    tc([ll('a'), -1], null),
    tc([ll('b'), null], null),
    tc([ll('b'), 1], null)
  ];

  runInOutTestCases(getKthToLast, tests);
});

function ll(input) {
  const values = Array.from(input);
  return yallist.create(values);
}
