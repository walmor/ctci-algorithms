const isPermutationOf = require('../../algorithms/array-and-strings/02-check-permutation');

describe('02. Check if a string is a permutation of other', () => {
  const tests = [
    tc(['a', 'b'], false),
    tc(['a', 'a'], true),
    tc(['abc', 'acb'], true),
    tc(['abc', 'bca'], true),
    tc(['abc', 'aaa'], false),
    tc(['abcde', 'cbdae'], true),
    tc(['walmor', 'lormaw'], true),
    tc(['tests', 'ts'], false)
  ];

  runInOutTestCases(isPermutationOf, tests);
});
