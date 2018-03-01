const urlify = require('../../algorithms/array-and-strings/03-urlify');

describe('03. Urlify', () => {
  // Note: this spread syntax [...'value'] basically converts a string to an array.
  // It was necessary because strings are immutable and cannot be manipulated directly.
  const tests = [
    tc([[...'Mr John  '], 7], [...'Mr%20John']),
    tc([[...'Mr John Smith    '], 13], [...'Mr%20John%20Smith']),
    tc([[...'Mr Peter C Foo      '], 14], [...'Mr%20Peter%20C%20Foo']),
    tc([[...'Smith'], 5], [...'Smith'])
  ];

  runInOutTestCases(urlify, tests);
});
