const compressString = require('../../algorithms/array-and-strings/06-string-compression');

describe('06. Simple string compression', () => {
  const tests = [
    tc(['aabcccccaaa'], 'a2b1c5a3'),
    tc(['abcde'], 'abcde'),
    tc(['aaabbbcccddd'], 'a3b3c3d3'),
    tc(['aaabbcc'], 'a3b2c2'),
    tc(['aaabbc'], 'aaabbc'),
    tc(['abcdefghijzzzzzzzzzzzz'], 'abcdefghijzzzzzzzzzzzz')
  ];

  runInOutTestCases(compressString, tests);
});
