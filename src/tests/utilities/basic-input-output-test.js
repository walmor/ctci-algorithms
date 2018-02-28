const expect = require('chai').expect;

function runInOutTestCases(functionUnderTest, tests) {
  tests.forEach(t => {
    it(`input: ${t.input}; expected output: ${t.expectedOutput}`, () => {
      const result = functionUnderTest(...t.input);
      expect(result).to.equal(t.expectedOutput);
    });
  });
}

function testCase(input, expectedOutput) {
  return {
    input,
    expectedOutput
  };
}

// These function are available globally just to simplify the tests.
// It's not a good ideia to do that in a real app.
global.runInOutTestCases = runInOutTestCases;
global.testCase = testCase;
global.tc = testCase;
