function isStringRotation(s1, s2) {
  if (!s1 || !s2) {
    return false;
  }

  if (s1.length !== s2.length) {
    return false;
  }

  let s1s1 = s1 + s1;

  return s1s1.includes(s2);
}

module.exports = isStringRotation;
