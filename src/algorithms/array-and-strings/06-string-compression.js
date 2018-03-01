function compressString(input) {
  if (!input) {
    return input;
  }

  // Note: In other languages, such as Java or C#, we should use the StringBuilder class,
  // but in JavaScript, the regular string concatenation is really well optimized by the engine,
  // so we don't need to worry about that.
  let output = '';
  let lastChar = null;
  let countChar = 0;

  for (let i = 0; i < input.length; i++) {
    if (lastChar !== input[i]) {
      if (lastChar !== null) {
        output += countChar;
      }

      countChar = 1;
      lastChar = input[i];
      output += lastChar;

      if (output.length >= input.length) {
        return input;
      }
    } else {
      countChar++;
    }
  }

  output += countChar;

  if (output.length >= input.length) {
    return input;
  }

  return output;
}

module.exports = compressString;
