function isPalindromePermutation(input) {
  if (!input) return false;

  input = input.toLowerCase();

  let hash = {};

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === ' ') {
      continue;
    }

    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }

  let oddFound = false;

  for (const char in hash) {
    if (!hash.hasOwnProperty(char)) continue;

    const occurrencies = hash[char];

    if (occurrencies % 2 !== 0) {
      if (oddFound) {
        return false;
      }

      oddFound = true;
    }
  }

  return true;
}

module.exports = isPalindromePermutation;
