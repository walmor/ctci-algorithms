const getBuildOrder = require('../../algorithms/trees-and-graphs/07-build-order');

describe('07. Get build order', () => {
  const tests = [tc1(), tc2(), tc3()];

  runInOutTestCases(getBuildOrder, tests);
});

function tc1() {
  const projs = ['a', 'b', 'c', 'd', 'e', 'f'];
  const deps = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
  const order = ['f', 'a', 'b', 'd', 'c', 'e'];

  return tc([projs, deps], order);
}

function tc2() {
  const projs = ['a', 'b', 'c', 'd', 'e', 'f'];
  const deps = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c'], ['c', 'f']];
  const error = 'cyclical dependencies';

  return tc([projs, deps], error);
}

function tc3() {
  const projs = ['a', 'b', 'c'];
  const deps = [['b', 'a'], ['c', 'b']];
  const order = ['c', 'b', 'a'];

  return tc([projs, deps], order);
}
