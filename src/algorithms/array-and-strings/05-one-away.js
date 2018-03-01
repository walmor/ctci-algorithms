function isOneEditAway(first, second) {
  const lengthDiff = Math.abs(first.length - second.length);
  if (lengthDiff > 1) return false;

  if (lengthDiff === 0) {
    return isOneReplaceAway(first, second);
  } else if (first.length < second.length) {
    return isOneInsertAway(first, second);
  } else {
    return isOneInsertAway(second, first);
  }
}

function isOneReplaceAway(first, second) {
  let diffs = 0;

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      diffs++;
      if (diffs > 1) return false;
    }
  }

  return true;
}

function isOneInsertAway(smallest, biggest) {
  let diffs = 0;

  for (let i = 0; i < smallest.length; i++) {
    if (smallest[i] !== biggest[i + diffs]) {
      i--;
      diffs++;
      if (diffs > 1) return false;
    }
  }

  return true;
}

module.exports = isOneEditAway;
