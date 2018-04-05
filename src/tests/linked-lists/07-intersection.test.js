const geIntersection = require('../../algorithms/linked-lists/07-intersection');
const ll = require('yallist').create;

describe('07. Determine if two singly linked list intersect.', () => {
  const tests = [
    ltc(ll([0, 1, 2, 3, 4, 5]), -1),
    ltc(ll([6, 5, 4, 3, 2, 1]), 0),
    ltc(ll([10, 11, 12, 13, 14, 15]), 3),
    ltc(ll([0, 1, 2, 3, 4, 5]), 5),
    ltc(ll([5]), 0)
  ];

  runInOutTestCases(geIntersection, tests);
});

function ltc(list, intersectionPoint) {
  const firstList = list;
  const secondList = createIntersectedList(list, intersectionPoint);
  const expectedOutput = intersectionPoint > -1 ? list.slice(intersectionPoint).toArray() : [];

  return tc([firstList, secondList], expectedOutput);
}

function createIntersectedList(list, intersectionPoint) {
  const intersectedList = createRandomList();

  if (intersectionPoint < 0) {
    return intersectedList;
  }

  let intersectionNode = list.head;

  for (let i = 0; i < intersectionPoint; i++) {
    intersectionNode = intersectionNode.next;
  }

  intersectionNode.list = null;
  intersectedList.pushNode(intersectionNode);
  intersectedList.length += list.length - intersectionPoint - 1;

  return intersectedList;
}

function createRandomList() {
  const listSize = getRandomInteger();
  const list = ll();

  for (let i = 0; i < listSize; i++) {
    list.push(getRandomInteger());
  }

  return list;
}

function getRandomInteger() {
  return Math.max(parseInt(Math.random() * 10, 10), 1);
}
