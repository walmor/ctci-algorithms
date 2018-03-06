function fillRowAndColumnWithZero(matrix) {
  let columnsToSkip = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (columnsToSkip.indexOf(j) > -1) {
        continue;
      }

      if (matrix[i][j] === 0) {
        fillRowWithZero(matrix, i);
        fillColumnWithZero(matrix, j);
        columnsToSkip.push(j);
        break;
      }
    }
  }

  return matrix;
}

function fillRowWithZero(matrix, rowIndex) {
  const row = matrix[rowIndex];

  for (let i = 0; i < row.length; i++) {
    row[i] = 0;
  }
}

function fillColumnWithZero(matrix, colIndex) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][colIndex] = 0;
  }
}

module.exports = fillRowAndColumnWithZero;
