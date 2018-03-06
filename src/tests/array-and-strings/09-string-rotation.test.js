const isStringRotation = require('../../algorithms/array-and-strings/09-string-rotation');

describe('09. String Rotation', () => {
  const tests = [
    tc(['waterbottle', 'erbottlewat'], true),
    tc(['waterbottle', 'tlewaterbot'], true),
    tc(['waterbottle', 'watottlewat'], false),
    tc(['abcde', 'bcdea'], true),
    tc(['walmormoreira', 'moreirawalmor'], true),
    tc(['johnsmith', 'mrjohnsmith'], false),
    tc(['aaaa', 'a'], false)
  ];

  runInOutTestCases(isStringRotation, tests);
});
