function getBuildOrder(projects, dependencies) {
  const graph = getGraph(projects, dependencies);
  const buildOrder = [];

  for (const node of graph.nodes) {
    const error = processBuildOrder(node, buildOrder);
    if (error) return error;
  }

  return buildOrder;
}

function processBuildOrder(node, buildOrder) {
  if (node.state === 'processing') {
    // throw new Error('Cyclical dependencies');
    return 'cyclical dependencies';
  }

  if (node.state === 'processed') {
    return null;
  }

  node.state = 'processing';

  for (const adj of node.adjacents) {
    const error = processBuildOrder(adj, buildOrder);

    if (error) {
      return error;
    }
  }

  node.state = 'processed';
  buildOrder.push(node.value);

  return null;
}

function getGraph(projects, dependencies) {
  const map = new Map();

  for (const project of projects) {
    map.set(project, {
      value: project,
      state: 'pending',
      adjacents: []
    });
  }

  for (const dep of dependencies) {
    const node = map.get(dep[1]);
    node.adjacents.push(map.get(dep[0]));
  }

  const nodes = map.values();

  return {
    nodes
  };
}

module.exports = getBuildOrder;
