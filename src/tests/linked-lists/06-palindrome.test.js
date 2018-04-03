const isPalindrome = require('../../algorithms/linked-lists/06-palindrome');
const ll = require('yallist').create;

describe('06. Check if a linked list is a palindrome', () => {
  const tests = [
    tc([ll([])], true),
    tc([ll(['a'])], true),
    tc([ll(['n', 'o', 'o', 'n'])], true),
    tc([ll(['c', 'i', 'v', 'i', 'c'])], true),
    tc([ll(['r', 'a', 'd', 'a', 'r'])], true),
    tc([ll(['t', 'e', 's', 't'])], false),
    tc([ll(['c', 'r', 'e', 'a', 't', 'e'])], false)
  ];

  runInOutTestCases(isPalindrome, tests);
});
