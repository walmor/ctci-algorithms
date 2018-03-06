const rotateMatrix = require('../../algorithms/array-and-strings/07-matrix-rotation');

describe('07. Matrix rotation', () => {
  const tests = [
    tc([[[0, 1], [2, 3]]], [[2, 0], [3, 1]]),
    tc([[[0, 1, 2], [3, 4, 5], [6, 7, 8]]], [[6, 3, 0], [7, 4, 1], [8, 5, 2]]),
    tc(
      [[[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]]],
      [[12, 8, 4, 0], [13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3]]
    )
  ];

  runInOutTestCases(rotateMatrix, tests);
});
