const isPalindromePerm = require('../../algorithms/array-and-strings/04-palindrome-permutation');

describe('04. Check if a string is a permutation of a palindrome', () => {
  const tests = [
    tc(['Tact Coa'], true),
    tc(['a'], true),
    tc(['ab'], false),
    tc(['abcabc'], true),
    tc(['aaab'], false),
    tc(['aaaa'], true),
    tc(['aabcc'], true),
    tc(['aabdcc'], false)
  ];

  runInOutTestCases(isPalindromePerm, tests);
});
