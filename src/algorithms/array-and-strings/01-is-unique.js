function hasUniqueChars(input) {
  let hashtable = {};

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (hashtable[char]) {
      return false;
    } else {
      hashtable[char] = 1;
    }
  }

  return true;
}

module.exports = hasUniqueChars;
