const deleteNode = require('../../algorithms/linked-lists/03-delete-middle-node');
const ll = require('../utilities/linked-list-from-string');
const expect = require('chai').expect;

describe('03. Delete a node in the middle of a singly linked list', () => {
  const tests = [
    tc('abcd', 0, 'bcd'),
    tc('abcd', 1, 'acd'),
    tc('abcd', 2, 'abd'),
    tc('linked-list', 6, 'linkedlist'),
    tc('mr peter', 2, 'mrpeter')
  ];

  tests.forEach(tc => {
    it(tc.description, () => {
      deleteNode(tc.input.nodeToDelete);
      expect(tc.input.linkedList).to.eql(tc.expectedOutput);
    });
  });
});

function tc(input, nodeIndex, expectedOutput) {
  return {
    input: createTestCaseInput(input, nodeIndex),
    expectedOutput: createSinglyLinkedList(expectedOutput),
    description: `input: (${input}, ${nodeIndex}); expected output: ${expectedOutput}`
  };
}

function createTestCaseInput(input, nodeIndex) {
  const sll = createSinglyLinkedList(input);

  let node = sll.head;

  for (let i = 0; i < nodeIndex; i++) {
    node = node.next;
  }

  sll.length--;

  return { linkedList: sll, nodeToDelete: node };
}

function createSinglyLinkedList(input) {
  const sll = ll(input);

  let node = sll.head;

  while (node) {
    delete node.prev;
    node = node.next;
  }

  return sll;
}
