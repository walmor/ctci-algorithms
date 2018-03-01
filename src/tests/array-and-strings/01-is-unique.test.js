const hasUniqueChars = require('../../algorithms/array-and-strings/01-is-unique');

describe('01. Check if a string has unique characters', () => {
  const tests = [
    tc(['a'], true),
    tc(['abc'], true),
    tc(['aab'], false),
    tc(['ccbb'], false),
    tc(['abcde'], true),
    tc(['abcdefa'], false)
  ];

  runInOutTestCases(hasUniqueChars, tests);
});
