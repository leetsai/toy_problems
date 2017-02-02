var printSpiral = function(matrix) {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  let result = [];

  if (rowLength === 0) {
    return result;
  }

  helper(0, rowLength, colLength, matrix, result);

  return result;
};

var helper = function(level, row, column, matrix, result) {
  var i;

  if (row === 0 || column === 0) {
    return;
  } else if (row === 1) {
    for (i = 0; i < column; i++) {
      result.push(matrix[level][i + level]);
    }
  } else if (column === 1) {
    for (i = 0; i < row; i++) {
      result.push(matrix[i + level][level]);
    }
  } else {
    // Top layer (A)
    for (i = 0; i < column - 1; i++) {
      result.push(matrix[level][i + level]);
    }
    // Right layer (B)
    for (i = 0; i < row - 1; i++) {
      result.push(matrix[i + level][column + level - 1]);
    }
    // Bottom layer (A')
    for (i = column - 1; i > 0; i--) {
      result.push(matrix[row + level - 1][i + level]);
    }
    // Left layer (B')
    for (i = row - 1; i > 0; i--) {
      result.push(matrix[i + level][level]);
    }

    helper (level + 1, row - 2, column - 2, matrix, result);
  }
};

printSpiral([[1,2,3],[4,5,6],[7,8,9]]); // [1,2,3,6,9,8,7,4,5]
