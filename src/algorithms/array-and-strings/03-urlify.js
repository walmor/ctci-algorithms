function urlify(input, length) {
  if (!input) {
    return input;
  }

  let spaceCount = 0;

  for (let i = 0; i < length; i++) {
    if (input[i] === ' ') {
      spaceCount++;
    }
  }

  if (spaceCount === 0) {
    return input;
  }

  let moveTo = spaceCount * 2 + length - 1;

  for (let i = length - 1; i >= 0; i--) {
    if (input[i] !== ' ') {
      input[moveTo--] = input[i];
    } else {
      input[moveTo--] = '0';
      input[moveTo--] = '2';
      input[moveTo--] = '%';
    }
  }

  return input;
}

module.exports = urlify;
