function rotateMatrix(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n / 2; i++) {
    // Save the top
    let tempTop = [...matrix[i]];
    let last = n - i - 1;

    // from left to top
    for (let j = i; j < n - i; j++) {
      matrix[i][n - j - 1] = matrix[j][i];
    }

    // from bottom to left
    for (let j = i; j < n - i; j++) {
      matrix[j][i] = matrix[last][j];
    }

    // from right to bottom
    for (let j = i; j < n - i; j++) {
      matrix[last][j] = matrix[n - j - 1][last];
    }

    // from top to right
    for (let j = i; j < n - i; j++) {
      matrix[j][last] = tempTop[j];
    }
  }

  return matrix;
}

module.exports = rotateMatrix;
