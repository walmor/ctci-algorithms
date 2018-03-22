const yallist = require('yallist');

function createLinkedListFromString(input) {
  const values = Array.from(input);
  return yallist.create(values);
}

module.exports = createLinkedListFromString;
