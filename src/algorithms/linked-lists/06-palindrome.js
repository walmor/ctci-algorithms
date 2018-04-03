const yallist = require('yallist');

function isPalindrome(linkedList) {
  let front = linkedList.head;
  let back = linkedList.tail;
  let count = linkedList.length;

  while (count > 0) {
    if (front.value !== back.value) {
      return false;
    }

    front = front.next;
    back = back.prev;
    count -= 2;
  }

  return true;
}

module.exports = isPalindrome;
