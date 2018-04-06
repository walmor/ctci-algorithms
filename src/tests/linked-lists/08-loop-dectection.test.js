const hasLoop = require('../../algorithms/linked-lists/08-loop-dectection');
const yallist = require('yallist');
const ll = yallist.create;

// Avoid memory overflow when printing a circular list
yallist.prototype.toString = function() {
  return 'possible circular list';
};

describe('08. Detect if a linked list has a loop.', () => {
  const tests = [
    ltc(ll([0, 1, 2, 3, 4, 5]), -1),
    ltc(ll([6, 5, 4, 3, 2, 1]), 0),
    ltc(ll([10, 11, 12, 13, 14, 15]), 3),
    ltc(ll([0, 1, 2, 3, 4, 5]), 5),
    ltc(ll([5]), 0),
    ltc(ll([4, 3]), -1)
  ];

  runInOutTestCases(hasLoop, tests);
});

function ltc(list, loopPoint) {
  let hasLoop = false;

  if (loopPoint > -1) {
    const node = getNodeAt(list, loopPoint);
    list.tail.next = node;
    hasLoop = true;
  }

  return tc([list], hasLoop);
}

function getNodeAt(list, index) {
  let node = list.head;

  for (let i = 0; i < index; i++) {
    node = node.next;
  }

  return node;
}
