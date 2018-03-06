const fillRowAndColumnWithZero = require('../../algorithms/array-and-strings/08-zero-matrix');

describe('08. Zero matrix', () => {
  const tests = [
    tc([[[1, 2], [3, 4]]], [[1, 2], [3, 4]]),
    tc([[[0, 1], [2, 3]]], [[0, 0], [0, 3]]),
    tc([[[9, 1, 0], [3, 4, 5], [6, 7, 8]]], [[0, 0, 0], [3, 4, 0], [6, 7, 0]]),
    tc([[[1, 1, 2], [3, 0, 5], [6, 7, 8]]], [[1, 0, 2], [0, 0, 0], [6, 0, 8]]),
    tc(
      [[[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 0, 11], [12, 13, 14, 15]]],
      [[0, 0, 0, 0], [0, 5, 0, 7], [0, 0, 0, 0], [0, 13, 0, 15]]
    )
  ];

  runInOutTestCases(fillRowAndColumnWithZero, tests);
});
