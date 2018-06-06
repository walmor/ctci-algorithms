const hasRouteBetween = require('../../algorithms/trees-and-graphs/01-route-between-nodes');

describe('01. Check if there is a route between two nodes', () => {
  const tests = [gtc1(), gtc2(), gtc3()];

  runInOutTestCases(hasRouteBetween, tests);
});

function gtc1() {
  const node1 = { value: 1 };
  const node2 = { value: 2 };
  const node3 = { value: 3 };

  node1.adjacents = [node2];
  node2.adjacents = [node3];
  node3.adjacents = [node1];

  return tc([node1, node3], true);
}

function gtc2() {
  const node1 = { value: 1 };
  const node2 = { value: 2 };
  const node3 = { value: 3 };

  node1.adjacents = [node2];
  node2.adjacents = [];
  node3.adjacents = [node1];

  return tc([node1, node3], false);
}

function gtc3() {
  const node1 = { value: 1 };
  const node2 = { value: 2 };
  const node3 = { value: 3 };
  const node4 = { value: 4 };
  const node5 = { value: 5 };

  node1.adjacents = [node2];
  node2.adjacents = [node5];
  node3.adjacents = [node2];
  node4.adjacents = [node1, node3];
  node5.adjacents = [node4];

  return tc([node1, node3], true);
}
