function isPermutationOf(source, permutation) {
  if (!source || !permutation) {
    return false;
  }

  if (source.length !== permutation.length) {
    return false;
  }

  let hashtable = {};

  for (let i = 0; i < source.length; i++) {
    let char = source[i];

    if (hashtable[char]) {
      hashtable[char]++;
    } else {
      hashtable[char] = 1;
    }
  }

  for (let i = 0; i < permutation.length; i++) {
    let char = permutation[i];

    if (!hashtable[char]) {
      return false;
    }

    hashtable[char]--;
  }

  return true;
}

module.exports = isPermutationOf;
