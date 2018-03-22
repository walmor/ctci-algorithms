const removeDuplicates = require('../../algorithms/linked-lists/01-remove-dups');
const ll = require('../utilities/linked-list-from-string');

describe('01. Remove duplicates from a linked list', () => {
  const tests = [
    tc([ll('abcd')], ll('abcd')),
    tc([ll('aabb')], ll('ab')),
    tc([ll('abcdd')], ll('abcd')),
    tc([ll('aaaaa')], ll('a')),
    tc([ll('aaabccc')], ll('abc'))
  ];

  runInOutTestCases(removeDuplicates, tests);
});
