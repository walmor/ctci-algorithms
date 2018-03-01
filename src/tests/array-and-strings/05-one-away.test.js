const isOneEditAway = require('../../algorithms/array-and-strings/05-one-away');

describe('05. Check if a string is one edit away from another', () => {
  const tests = [
    tc(['pale', 'ple'], true),
    tc(['pales', 'pale'], true),
    tc(['pale', 'bale'], true),
    tc(['pale', 'bake'], false),
    tc(['pale', 'pales'], true),
    tc(['a', 'b'], true)
  ];

  runInOutTestCases(isOneEditAway, tests);
});
